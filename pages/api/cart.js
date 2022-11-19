import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function getCartItems(req, res) {
  if (req.method === 'GET') {
    
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!'});
      return;
    }

    const {token} = cookie.parse(req.headers.cookie);

    const backendRes = await fetch(`${API_URL}/api/panel/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await backendRes.json();

    if (backendRes.ok) {
      res.status(200).json({ data: data.list });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
