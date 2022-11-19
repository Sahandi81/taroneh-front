import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    const backendRes = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await backendRes.json();
    
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
      
      res.status(200).json({ user: data });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
