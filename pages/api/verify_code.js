import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function verifyCode(req, res) {
  if (req.method === 'POST') {
    const { phone, code } = req.body;

    const backendRes = await fetch(`${API_URL}/api/code_verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ phone, code })
    });

    const data = await backendRes.json();
    // console.log(data)
    if (backendRes.ok) {
      // Set cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/'
        })
      );
        
      res.status(200).json({ message: 'Success!', success:true, token:data.token });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
