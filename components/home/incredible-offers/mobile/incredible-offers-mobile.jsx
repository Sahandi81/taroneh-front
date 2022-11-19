import IncredibleOffersList from './incredible-offers-list';
import styles from '@/styles/components/incredible-offers-mobile.module.scss';

export default function IncredibleOffersMobile({offers}) {
  
  return (
    <section className='section'>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>پیشنهادات شگفت انگیز</p>
          <div className={styles.timer}>
            <span>20</span>
            <span>:</span>
            <span>40</span>
            <span>:</span>
            <span>10</span>
          </div>
        </div>
        <div className={styles.content}>
          <IncredibleOffersList offers={offers}/>
        </div>
      </div>
    </section>
  )
}
