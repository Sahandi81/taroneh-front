import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/components/ui/logo';
import styles from '@/styles/layout/footer-desktop.module.scss';
import Social from './social';

export default function FooterDesktop() {
  return (
    <footer className={styles.container}>
      <div className={styles.body}>
        <div className={styles.right}>
          <h3>درباره طارونه</h3>
          <Logo width={128} height={128} />
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد </p>
        </div>
        <div className={styles.center}>
          <h3>دسترسی سریع</h3>
          <Link href='/rules'><a className={styles.link}>قوانین</a></Link>
          <Link href='/how-to-order'><a className={styles.link}>نحوه خرید</a></Link>
          <Link href='/faq'><a className={styles.link}>سوالات متداول</a></Link>
          <Link href='/blog'><a className={styles.link}>بلاگ</a></Link>
          <Link href='/contact'><a className={styles.link}>تماس با ما</a></Link>
          <Link href='/about'><a className={styles.link}>درباره ما</a></Link>
        </div>
        <div className={styles.left}>
          <h3>پشتیبانی ، رضایت</h3>
          <div className={styles.enamad}>
            <div className={styles.item}>
              <Image src='/img/e-namad-001.png' alt='e-namad' width={100} height={100} />
            </div>
            <div className={styles.item}>
              <Image src='/img/e-namad-002.png' alt='e-namad' width={100} height={100} />
            </div>
            <div className={styles.item}>
              <Image src='/img/e-namad-003.png' alt='e-namad' width={100} height={100} />
            </div>
          </div>
          <div className={styles.support}>
            <p>پشتیبانی تلفنی</p>
            <p>22334455 - 021</p>
          </div>
          <Social />
        </div>
      </div>
      <p className={styles.copyright}>
      تمامی خدمات این وب سایت دارای مجوزهای لازم از مراجع مربوطه می باشد و کليه حقوق اين سايت متعلق به طارونه می‌باشد.
      </p>
    </footer>
  )
}
