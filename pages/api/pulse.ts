// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addPulse, getSite } from '@/lib/db';

type Data = {
  status: string
}

const WATCH_TIMEOUT = 3 * 60 * 1000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const site = await getSite();

  if (!site) {
    res.status(200).json({status: 'success'});
    return;
  }

  if (site.timestamp + WATCH_TIMEOUT < Date.now()) {
    console.log("Outdated timestamp", site, req.body);
    res.status(200).json({status: 'success'});
    return;
  }

  console.log("Add pulse", req.body);
  await addPulse(req.body);

  res.status(200).json({status: 'success'});
}
