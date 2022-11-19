import Layout from '@/components/layout/layout';

import styles from '@/styles/components/blog.module.scss';
import ServiceCaller from '@/helpers/serviceCall';
import SidebarItem from '@/components/blog/sidebar-item';
import { API_URL } from '@/config/index';

export default function Blog({ posts }) {
  
  return (
    <Layout
      title='بلاگ | بازارچه خشکبار طارونه'
      hasHeader
      hasDescription
      hasKeywords
    >
      <section className={styles.section}>
        {posts &&<SidebarItem post={posts}/>}
      </section>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps({params:params}) {
  // Fetch data from external API
  // console.log(params)
  // const res = await ServiceCaller(`blog/${params.slug}`);
  const fetchs =await fetch( 'https://api.taroneh.ir/api/blog/'+ params.slug,{
    method: 'GET',
    headers: {
      
      'Accept': 'application/json'
    },
  })
  const data =await fetchs.json();
  // console.log(data, 'https://api.taroneh.ir/api/blog/'+ params.slug)
  // console.log(params)
  return { props: { posts: data } }
}
