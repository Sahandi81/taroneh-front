import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function userDetails(req, res) {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(304).end();
      return;
    }

    if (req.headers.cookie) {
      const { token } = cookie.parse(req.headers.cookie);

      if (token) {
        const backendRes = await fetch(`${API_URL}/api/user_details`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await backendRes.json();

        if (backendRes.ok) {
          res.status(200).json({ user: data });
        } else {
          res
            .status(backendRes.status)
            .json({ message: data.message || 'User not found!' });
        }
      } else {
        res.status(304).end();
        return;
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
