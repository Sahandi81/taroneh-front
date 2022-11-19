import Layout from '@/components/layout/layout';
import Sidebar from '@/components/profile/sidebar';
import styles from '@/styles/components/profile.module.scss';

import cookie from 'cookie';
import {API_URL} from '@/config/index';

export default function ProfilePage() {
  return (
    <Layout hasHeader hasDescription hasKeywords>
      <section className={styles.section}>
        <div className={styles.container}>
          <Sidebar />
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
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
        props: {
          data
        }
      }
    }
  }

  return { 
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
