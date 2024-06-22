/** @format */

import Link from "next/link"
import { useEffect, useState } from "react"
import { User } from "../../types/User"

const UsersList: React.FC = () => {
  const [message, setMessage] = useState("Loading...")
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users")
      const data = await response.json()
      const sortedData = data.sort((a: User, b: User) => a.name.localeCompare(b.name))
      setTimeout(() => {
        setUsers(sortedData)
        setMessage("List of Active Users!")
      }, 500) // 1/2 second delay
    }

    fetchData()
    return () => {}
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="text-4xl font-bold text-center mb-4">{"Joe's Homework"}</div>
      <div className="border-t border-gray-300 mb-4"></div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">{message}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {users.map((user: User, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
              <p className="text-sm text-gray-600">Age: {user.age}</p>
              <div className="text-md font-medium cursor-pointer text-blue-500 hover:underline">
                <Link href={`/users/${user.id}`}>Go to profile...</Link>
              </div>
            </div>
          ))}
        </div>
        {message !== "Loading..." && (
          <div className="pt-30 text-xl mb-6 text-centere  cursor-pointer text-blue-500 hover:underline">
            <Link href={`/`}>Return to Home...</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default UsersList
