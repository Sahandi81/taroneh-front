import cookie from 'cookie';

import Layout from '@/components/layout/layout';
import Register from '@/components/login-and-register/register/register';

import { API_URL, NEXT_URL } from '@/config/index';

export default function RegisterPage() {
  return (
    <Layout title='ورود/ثبت&zwnj;نام | بازارچه خشکبار طارونه'>
      <Register />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const jk=  await fetch(`${NEXT_URL}/api/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      
    }
  });
  // console.log(await jk.json())
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie);
    // console.log(token)
    const backendRes = await fetch(`${API_URL}/api/user_details`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (backendRes.ok) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }
  }

  return {
    props: {}
  };
}
