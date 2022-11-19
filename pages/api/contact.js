import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function contact(req, res) {
  if (req.method === 'POST') {

    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!'});
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    
    
    const backendRes = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await backendRes.json();
    // console.log(data)
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
