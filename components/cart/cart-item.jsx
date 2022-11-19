import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '@/features/cart/cartSlice';
import formatPrice from '@/helpers/formatPrice';
import Button from '../ui/button';
import styles from '@/styles/components/cart-item.module.scss';
import imageLoader from "@/helpers/imageLoader";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleClickPlus = () => dispatch(addItem(item));
  const handleClickMinus = () => dispatch(removeItem(item));

  const { img, title, price, quantity, code, weight } = item;

  

  let weightProduct;
  let calcWeight;
  switch(weight){
      case "1000":
      weightProduct =  weight + "قیمت به کیلو";
      calcWeight= 'کیلو گرم'
      break;
      case "One":
        weightProduct= "قیمت به عدد"
      calcWeight= 'هر عدد' 
        break;
      case "Pack":
       weightProduct="قیمت  بسته"
      calcWeight= 'بسته'
       break;
       default: 
        weightProduct =`قیمت به ${weight} گرم`
      calcWeight= 'گرم'
        break
  }
  
  return (
    <div className={styles.container}>
      {/* image */}
      <div className={styles.image}>
        {img &&<Image
            loader={imageLoader}
          src={`/storage/${code}/${img}`}
          alt={title}
          width={120}
          height={120}
          placeholder='blur'
          blurDataURL={img}
        />}
        
      </div>
      {/* body */}
      <div className={styles.body}>
        {/* title */}
        <h3 className={styles.name}>{title}</h3>
        {/* price */}
        <div className={styles.price}>
          <label>{weightProduct}</label>
          <div>
            {formatPrice(price)} <span>تومان</span>
          </div>
        </div>
        {/* quantity */}
        <div className={styles.wieght}>
          <label>{calcWeight}</label>
          <div>
            <Button variant='plus' handleClick={handleClickPlus} />
            <span>{quantity}</span>
            <Button variant='minus' handleClick={handleClickMinus} />
          </div>
        </div>
      </div>
    </div>
  );
}
