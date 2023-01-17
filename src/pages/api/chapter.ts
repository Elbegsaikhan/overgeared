import type {NextApiRequest, NextApiResponse} from "next";
import {getAllDirectries} from '../../../utils/files'

type Data = {
  success: boolean,
  dirs: []
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const dirs = getAllDirectries()
  console.log('Dirs', dirs)
  res.status(200).json({dirs: [], success: true})
}