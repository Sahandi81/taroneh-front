import { NEXT_URL } from '@/config/index';

export async function login({ phone, password }) {
  const res = await fetch(`${NEXT_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ phone, password })
  });

  const data = await res.json();
  // console.log(data);
  // if (res.ok) {
  //   console.log(data);
  // }
}
