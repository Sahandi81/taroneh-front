import Layout from '@/components/layout/layout';
import Shipping from '@/components/checkout/shipping';

import cookie from 'cookie';
import {API_URL} from '@/config/index';

export default function ShippingPage() {
  return (
    <Layout hasHeader>
      <Shipping />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {req} = context;

  if (req.headers.cookie) {
    const {token} = cookie.parse(req.headers.cookie);

    const backendRes = await fetch(`${API_URL}/api/user_details`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await backendRes.json();

    if (backendRes.ok) {
      return { 
        props: {}
      }
    }
    
    return { 
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return { 
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}
