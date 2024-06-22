/** @format */

import { NextApiRequest, NextApiResponse } from "next"
import userData from "../../../data/users.json"

const { users } = userData

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const user = users.find(user => user.id === id)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}
