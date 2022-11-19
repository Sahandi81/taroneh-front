import { API_URL } from '@/config/index';

export default async function sendVerificationCode(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body;

    const backendRes = await fetch(`${API_URL}/api/send_verification_code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ phone })
    });

    const data = await backendRes.json();
    if (backendRes.ok) {
      res.status(200).json({ message: data.msg, isNewUser: data.new_user, success: data.success });
    } else {
      res.status(backendRes.status).json({ message: data.message || 'Invalid phone number!' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
