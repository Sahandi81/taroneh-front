import Layout from '@/components/layout/layout';
import Login from '@/components/login-and-register/login/login';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {

  const router = useRouter();

  const user = useSelector(selectUser)

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [router, user])

  return (
    <Layout title='ورود/ثبت&zwnj;نام | بازار آجیل و خشکبار طارونه'>
      <Login />
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const { req } = context;

//   if (req.headers.cookie) {
//     const { token } = cookie.parse(req.headers.cookie);

//     const backendRes = await fetch(`${API_URL}/api/user_details`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     if (backendRes.ok) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false
//         }
//       };
//     }
//   }

//   return {
//     props: {}
//   };
// }
