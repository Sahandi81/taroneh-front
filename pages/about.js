import About from '@/components/about/about';
import Layout from '@/components/layout/layout';

export default function AboutPage() {
  return (
    <Layout title='درباره ما | بازار آجیل و خشکبار طارونه' hasHeader hasFooter hasDescription hasKeywords>
      <About />
    </Layout>
  )
}
