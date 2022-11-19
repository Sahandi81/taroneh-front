import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function completeProfile(req, res) {
  if (req.method === 'PUT') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!'});
      return;
    }
      
    const {token} = cookie.parse(req.headers.cookie);

    const { f_name, l_name, email, password, phone, address,photos } = req.body;

    const backendRes = await fetch(`${API_URL}/api/panel/complete_profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ f_name, l_name, email, password, phone, address, photos })
    });
    

    const data = await backendRes.json();
    if (backendRes.ok) {
      res.status(200).json({ data });
      

    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
