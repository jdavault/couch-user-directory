/** @format */

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User } from "../../types/User"

export default function UserProfile() {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState<User>({} as User)
  const [friends, setFriends] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setTimeout(async () => {
          try {
            const res = await fetch(`/api/users/${id}`)
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`)
            }

            const userData = await res.json()
            setUser(userData)
            const friendsData = await Promise.all(
              userData.friends.map(async (friendId: string) => {
                const friendRes = await fetch(`/api/users/${friendId}`)
                if (!friendRes.ok) {
                  throw new Error(`HTTP error fetching friend! status: ${friendRes.status}`)
                }

                return await friendRes.json()
              })
            )
            setFriends(friendsData)
          } catch (error: any) {
            setError(error.message || "An unexpected error occurred")
          }
        }, 1000) // 1 second delay
      }
    }

    fetchData()
  }, [id])

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <div className="text-2xl font-bold">{error}</div>
      </div>
    )
  }
  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-5">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="h-40 p-4">
          {user?.id && (
            <div className="flex justify-center mt-10">
              <Image
                src={`/profile-pictures/profile-${user.id}.jpg`}
                width={130}
                height={130}
                className="rounded-full border-4 border-white"
                alt={`${user.name}'s profile picture`}
              />{" "}
            </div>
          )}
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-center mt-5">{user.name}'s Profile</h1>
          <div className="text-center">
            <p className="text-lg text-gray-700 text-center mb-4">{user.username}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">Age: {user.age}</p>
            <p className="text-gray-600">Email: {user.email}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-center mb-2">Friends</h2>
              <ul className="space-y-1">
                {friends.map(friend => (
                  <li key={friend.id} className="text-center">
                    <div className="text-blue-500 hover:underline text-lg">
                      <Link href={`/users/${friend.id}`}>{friend.name}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-md font-medium cursor-pointer text-blue-500 hover:underline">
              <Link href={`/users`}>User page</Link>
            </div>
            <div className="text-md font-medium cursor-pointer text-blue-500 hover:underline">
              <Link href={`/`}>Home page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
