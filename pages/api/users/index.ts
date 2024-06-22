
import { NextApiRequest, NextApiResponse } from "next"
import userData from "../../../data/users.json"
const { users } = userData

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate that users data exists and is an array
  if (!Array.isArray(users) || users.length === 0) {
    return res.status(404).json({ error: "Users not found" });
  }

  // Return the users data
  res.status(200).json(users);
}