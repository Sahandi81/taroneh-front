import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/layout/footer-mobile.module.scss'
import Social from './social';

export default function FooterMobile() {
  return (
    <footer className={styles.container}>
      <div className={styles.body}>
      <div className={styles.quick_access}>
        <h3>دسترسی سریع</h3>
        <div className={styles.navigation}>
          <Link href='/about'><a className={styles.link}>داستان ما </a></Link>
          <Link href='/rules'><a className={styles.link}>قوانین </a></Link>
          <Link href='/contact'><a className={styles.link}>تماس با ما </a></Link>
          <Link href='/blog'><a className={styles.link}>بلاگ </a></Link>
          <Link href='/faq'><a className={styles.link}>سوالات متداول </a></Link>
          <Link href='/how-to-order'><a className={styles.link}>نحوه خرید </a></Link>
        </div>
      </div>
      <div className={styles.enamad}>
        <div className={styles.item}>
          <Image src='/img/e-namad-001.png' alt='e-namad' width={80} height={80} />
        </div>
        <div className={styles.item}>
          <Image src='/img/e-namad-002.png' alt='e-namad' width={80} height={80} />
        </div>
        <div className={styles.item}>
          <Image src='/img/e-namad-003.png' alt='e-namad' width={80} height={80} />
        </div>
      </div>
      <Social />
      <div className={styles.about}>
        <h3>درباره طارونه</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
      </div>
      </div>
      <div className={styles.copyright}>
        <p>کلیه حقوق این سایت متعلق به طارونه می باشد.</p>
      </div>
    </footer>
  )
}
