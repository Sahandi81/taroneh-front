import Layout from '@/components/layout/layout';
import CommonQuestions from '@/components/common-questions/common-questions';

export default function FaqPage() {
  return (
    <Layout title='سوالات متداول شما | بازارچه خشکبار طارونه' hasHeader hasFooter hasDescription hasKeywords>
      <CommonQuestions />
    </Layout>
  )
}
