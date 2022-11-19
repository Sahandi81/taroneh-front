
import FacebookIcon from '../../icons/facebook-icon';
import InstagramIcon from '../../icons/instagram-icon';
import LinkedInIcon from '../../icons/linkedin-icon';
import TelegramIcon from '../../icons/telegram-icon';
import TwitterIcon from '../../icons/twitter-icon';

import styles from '@/styles/components/social.module.scss';

export default function Social() {
  return (
    <div className={styles.container}>
      <div className={styles.facebook}>
          <FacebookIcon className={styles.icon} />
        </div>
        <div className={styles.instagram}>
          <InstagramIcon className={styles.icon} />
        </div>
        <div className={styles.linkedin}>
          <LinkedInIcon className={styles.icon} />
        </div>
        <div className={styles.telegram}>
          <TelegramIcon className={styles.icon} />
        </div>
        <div className={styles.twitter}>
          <TwitterIcon className={styles.icon} />
        </div>
    </div>
  )
}
