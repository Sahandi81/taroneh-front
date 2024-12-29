import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function updateProfile(req, res) {
  if (req.method === 'PATCH') {
  
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized!' });
      return;
    }
  

    const { token } = cookie.parse(req.headers.cookie);

    const {  address } = req.body;
    
    const backendRes = await fetch(`https://tapi.ydos.ir/api/panel/update_profile`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(address)
    })
    
    const data = await backendRes.json();
    
    console.log(data)
    console.log(JSON.stringify(address), ' ',token)
    if (backendRes.ok) {
    
      
      res.status(200).json({ message: 'Success!' , data: data.profile});
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
    

  } else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
