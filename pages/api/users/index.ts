
import { NextApiRequest, NextApiResponse } from "next"
import userData from "../../../data/users.json"
const { users } = userData

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users)
}
