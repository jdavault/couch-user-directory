/** @format */

import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Welcome to the User Directory</h1>
        <div className="text-2xl font-medium text-blue-500 hover:underline">
          <Link href={`/users`}>View All Users</Link>
        </div>
      </div>
    </div>
  )
}
