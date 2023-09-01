import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const data = req.body
//   //const id = await createItem(data)
//   res.status(200).json({ data })
// }
// export async function POST(request: Request) {
//     console.log(request.body);
    
// }
// pages/api/route.ts

// import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method === 'POST') {
    // Do something with the POST request
    const { name } = req.body;
    // Perform some operations and then send response
    res.status(200).json({ message: 'Successfully received POST request' });
  } else {
    res.status(405).json({ message: 'Method not allowed' }); // 405 Method Not Allowed
  }
}
