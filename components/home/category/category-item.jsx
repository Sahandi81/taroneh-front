import Image from 'next/image';
import ArrowLeftIcon from '../../icons/arrow-left-dark-1-icon';
import styles from '@/styles/components/category.module.scss'
import imageLoader from '@/helpers/imageLoader';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CategoryItem({id, name, img }) {
  // console.log(id)
  const router = useRouter();
  // console.log(router.query);
  return (
    <Link href={!router.query.category?`/products?category=${id}`:`/products?s_category=${id}&page=1&per_page=8`} passHref>
    <div style={router.query.category && {width: "13rem", height:"13rem"}} className={styles.item}>
      <div className={styles.img}>
        <Image loader={imageLoader} src={img} alt={name} width={171} height={198} layout='responsive' />
      </div>
     
      <div className={styles.action}>
        <h4>{name}</h4>
        <div className={styles.icon}>
          <ArrowLeftIcon />
        </div>
      </div>
      
    </div>
    </Link>
  )
}
