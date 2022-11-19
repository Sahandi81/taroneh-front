import PhoneIcon from '../../icons/phone-icon-mobile';
import styles from '@/styles/components/contact-desktop.module.scss'

export default function ContactDesktop() {
  return (
    <section className='section'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>مشاوره میخواهید؟ منتظر تماس شما هستیم</h2>
          <p className={styles.text}>برای دریافت مشاو‌‌ره رایگان، همین حالا با 
    کارشناسان ما تماس بگیرید</p>
          <PhoneIcon className={styles.icon} />
        </div>
        <div className={styles.phone}>
          <span>123456 - 021</span>
        </div>
      </div>
    </section>
  )
}
