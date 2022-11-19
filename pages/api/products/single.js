import { API_URL } from '@/config/index';
import { MSG_SERVER_ERROR } from '@/data/messages';

export default async function getSingleProduct(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const backendRes = await fetch(`${API_URL}/api/shop/single_product?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await backendRes.json();

    if (backendRes.ok) {
      res.status(200).json({ data: data.product_info });
    } else {
      res.status(backendRes.status).json({ message: data.message || MSG_SERVER_ERROR });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
