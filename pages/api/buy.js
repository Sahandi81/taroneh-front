import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function buy(req, res) {
  if (req.method === 'POST') {

    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    // console.log(JSON.stringify(req.body),token)
    const backendRes = await fetch(`${API_URL}/api/panel/buy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await backendRes.json();
    if (backendRes.ok) {
      res.status(200).json({ data });
    } else {
      res.status(backendRes.status).json({ message: data.message || 'Server Error!', errors: data.errors });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}