import { API_URL } from '@/config/index';

export default async function getProducts(req, res) {
  if (req.method === 'GET') {
    const backendRes = await fetch(`${API_URL}/api/shop`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await backendRes.json();

    if (backendRes.ok) {
      res.status(200).json({ data });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
