import Image from 'next/image';
import StarIcon from '../../icons/star-icon';
import HeartRedIcon from '../../icons/heart-red-icon';
import formatPrice from '@/helpers/formatPrice';

import styles from '@/styles/components/orders.module.scss';

export default function OrderProduct({ id, name, img, price }) {
  return (
    <div className={styles.product}>
      {/* header */}
      <div className={styles.product_header}>
        <span className={styles.product_rating}>
          5/4 <StarIcon />
        </span>
        <HeartRedIcon />
      </div>
      {/* image */}
      <div className={styles.product_image}>
        <Image
          src={img}
          alt={name}
          width={110}
          height={110}
          placeholder='blur'
          blurDataURL={img}
        />
      </div>
      {/* name */}
      <h3 className={styles.product_name}>{name}</h3>
      {/* price */}
      <div className={styles.product_price}>
        <span>قیمت هر کیلو</span>
        <span>
          {formatPrice(price)} <small>تومان</small>
        </span>
      </div>
    </div>
  );
}
