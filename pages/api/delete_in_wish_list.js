import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function DeleteWishList(req, res) {
  if (req.method === 'DELETE') {

    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!'});
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    
    
    const backendRes = await fetch(`${API_URL}/api/panel/delete_wish_list`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await backendRes.json();
        console.log(data, req.body, token)
    if (backendRes.ok) {
      if (!data.success) {
        res.status(200).json({ message: 'Product already exist!', success: false });
        return;
      }
      res.status(200).json({ message: 'Success!', success: true });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
