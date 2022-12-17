import Layout from '@/components/layout/layout';
import Header from '@/components/blog/header';
import Sidebar from '@/components/blog/sidebar';
import Main from '@/components/blog/main';
import styles from '@/styles/components/blog.module.scss';
import ServiceCaller from '@/helpers/serviceCall';

export default function Blog({ posts }) {
  // console.log(posts)
  return (
    <Layout
      title='بلاگ | بازار آجیل و خشکبار طارونه'
      hasHeader
      hasDescription
      hasKeywords
    >
      <section className={styles.section}>
        <div className={styles.container}>
          <Header data={posts.data?.slice(0, 4)} />
          <div className={styles.body}>
            <Sidebar data={posts.data} />
            <Main data={posts} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // console.log(params)
  const res = await ServiceCaller('api/blog');

  return { props: { posts: res } }
}
