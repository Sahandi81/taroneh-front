import OrderProducts from './order-products';
import styles from '@/styles/components/order-products.module.scss';


export default function OrderProductsList({data}) {
  // console.log(data)
  return (
    <div className={styles.list}>
      
      {data.map(el=><OrderProducts {...el}/>)}
    </div>
  )
}