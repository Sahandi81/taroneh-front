import Image from 'next/image';
import styles from '@/styles/components/hero.module.scss';
import banner from '../../public/img/banner@2x.jpg'
import bannerMobile from '../../public/img/hero-mobile-1.jpg'
// import Carousel from '../carousel/carousel';

export default function Hero() {

  return (
    <div className={styles.container}>
        <div className={styles.desk}  style={{display: "flex", justifyContent: "center"}}>
          <Image
            src={banner}
            alt='brown and beige nut lot'
            priority
          />
        </div>
        {/* <Carousel /> */}
        <div className={styles.mob}>
          <Image
            src={bannerMobile}
            alt='brown and beige nut lot'
            layout='responsive'
            priority
          />
        </div>
      
      <h1 className={styles.title}>
        <span className={styles.title_main}>بازار آجیل و خشکبار طارونه</span>
        <span className={styles.title_sub}>از بازار تا خونه راهی نیست</span>
      </h1>
    </div>
  );
}
