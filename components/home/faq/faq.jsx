import { useRouter } from 'next/router'
import Accordion from '@/components/accordion/accordion';
import ArrowLeftIcon from '../../icons/arrow-left-dark-1-icon';
import styles from '@/styles/components/faq.module.scss'

export default function Faq() {
  const router = useRouter();
  return (
    <section className='section'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>سوالات متداول شما</h3>
          {router.pathname === '/' && (
            <p onClick={() => router.push('/faq')}>
              مشاهده بیشتر
              <ArrowLeftIcon className={styles.icon} />
            </p>
          )}
        </div>
        <div className={styles.content}>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </section>
  )
}
