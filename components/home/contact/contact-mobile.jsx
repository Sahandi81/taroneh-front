import PhoneIcon from '../../icons/phone-icon-mobile';
import styles from '@/styles/components/contact-mobile.module.scss'
import Link from 'next/link'

export default function ContactMobile() {
  return (
    <section className='section'>
      <div className={styles.container}>
        <p className={styles.text}>برای دریافت مشاو‌‌ره رایگان، همین حالا با 
  کارشناسان ما تماس بگیرید</p>
        <Link href={`tel:021123456`} passHref>
          <div className={styles.phone}>
          <span>123456 - 021</span>
          <PhoneIcon className={styles.icon} />
        </div>
        </Link>
      </div>
    </section>
  )
}
