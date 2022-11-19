import Image from 'next/image';
import Link from 'next/link';
import SaleItem from './sale-item-mobile';
import ArrowLeftIcon from '../icons/arrow-left-dark-1-icon';
import styles from '@/styles/components/sale-box-mobile.module.scss';

export default function SaleBox({
  headerColor,
  backColor,
  title,
  img,
  slug,
  items
}) {
  // console.log(slug)
  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header} style={{ backgroundColor: headerColor }}>
        <h2>{title}</h2>
        <Link  href={`/products?type=${slug}`} passHref>
          <a className={styles.more}>
            <span>بیشتر</span>
            <ArrowLeftIcon className={styles.icon} />
          </a>
        </Link>
      </div>

      {/* body */}
      <div className={styles.body} style={{ backgroundColor: backColor }}>
        {/* image */}
        <div className={styles.img}>
          <Image src={img} alt='Special Sale' width={155} height={182} />
        </div>
        {/* list */}
        <div className={styles.list}>
          {items.map(({ id, ...otherProps }) => (
            <SaleItem key={id} id={id} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
}
