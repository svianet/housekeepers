import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseApi } from '../../interfaces/api';
import { saveProfile } from '../../lib/providers/person';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' })
  }
  let params = req.body;
  const response: ResponseApi = await saveProfile(params);
  if (response.success) {
    res.status(200).send(response);
  } else {
    res.status(response.statusCode || 500).send(response);
  }
}
