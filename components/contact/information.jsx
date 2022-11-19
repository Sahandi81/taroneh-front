import Social from '../layout/footer/social';
import styles from '@/styles/components/contact-page.module.scss'

export default function Information() {
  return (
    <div className={styles.information}>
      <div className={styles.address}>
        <h3 className={styles.title}>آدرس:</h3>
        <p className={styles.paragraph}>خیابان دادمان، بالاتر از میدان ونک، بلوار میرداماد، جنب پاساژ پایتخت ایران</p>
        <p className={styles.paragraph}> طبقه ۴۷۸ ، واحد  696</p>
      </div>
      <div className={styles.email_phone}>
        <div>
          <h3 className={styles.title}>ایمیل:</h3>
          <p className={styles.paragraph}>contact@taroneh.ir</p>
        </div>
        <div>
          <h3 className={styles.title}>تلفن:</h3>
          <p className={styles.paragraph}>22883355 - 021</p>
        </div>
      </div>
      <div className={styles.social}>
          <h3 className={styles.title}>شبکه های اجتماعی:</h3>
          <Social />
      </div>
      <div className={styles.namad}></div>
    </div>
  )
}
