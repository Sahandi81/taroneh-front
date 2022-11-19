import Image from 'next/image';
import styles from '@/styles/components/order-products.module.scss';
import imageLoader from '@/helpers/imageLoader';

export default function OrderProducts({title, code,img, weight, price}) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image loader={imageLoader} src={`/storage/${code}/${img}`} alt='product' width={64} height={64} />
      </div>
      <h4>{title}</h4>
      <div className={styles.weight}>
        <span>{weight}</span>
        <span>گرم</span>
      </div>
      <div className={styles.price}>
        <span>{price}</span>
        <span>تومان</span>
      </div>
    </div>
  )
}