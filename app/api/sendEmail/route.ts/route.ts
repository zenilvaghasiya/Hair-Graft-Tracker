import { NextApiRequest, NextApiResponse } from 'next';
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
// api/sendEmail.ts


// api/sendEmail.ts
export async function POST(request: Request) {
      
        console.log('POST request received:', request.body);
        // Handle POST request
       
      

}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     console.log('POST request received:', req.body);
//     // Handle POST request
//     res.status(200).json({ message: 'Email sent successfully' });
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }


// Default export to handle POST request
// export default async (req: NextApiRequest, res: NextApiResponse) => {
  
//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }
//   // your sending email logic here
//   const { email, name, message } = req.body;

//   const content = {
//     to: 'jenilvaghasiya999@gmail.com',
//     from: 'info@hairgrafttracker.com',
//     subject: `New Message From ${name}`,
//     text: message,
//     html: `<p>${message}</p>`,
//   };

//   try {
//     await sgMail.send(content);
//     res.status(200).send('Message sent successfully.');
//   } catch (error) {
//     console.error('Error sending email', error);
//     res.status(400).send('Message not sent.');
//   }
// };
