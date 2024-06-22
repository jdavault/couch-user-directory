
import { NextApiRequest, NextApiResponse } from "next"
import { users } from "../../../data/users.json" // Assuming this is where your mock data is

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users)
}
