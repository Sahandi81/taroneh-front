import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart,
  selectCartItems,
  selectCartTotalPrice
} from '@/features/cart/cartSlice';
import formatPrice from '@/helpers/formatPrice';
import Button from '../ui/button';
import TimesIcon from '../icons/times-2-icon';
import styles from '@/styles/components/basket-checkout.module.scss';

export default function Basket() {
  const router = useRouter();

  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>سبد خرید</h2>
      {/* items */}
      {items.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}
      {/* total */}
      <div className={styles.total}>
        <span className={styles.total_label}>هزینه ارسال:</span>
        <span className={styles.total_value}>رایگان</span>
        <span className={styles.total_label}>مجموع:</span>
        <div className={styles.total_value}>
          <span>{formatPrice(totalPrice)}</span>
          <span>تومان</span>
        </div>
      </div>
      {/* edit basket button */}
      {/* <div className={styles.action}>
        <Button color='primary-outline' rounded>
          ویرایش سبد خرید
        </Button>
      </div> */}
    </div>
  );
}

function BasketItem({ item }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClickPlus = () => dispatch(addItem(item));
  const handleClickMinus = () => dispatch(removeItem(item));
  const handleClickDelete = () => dispatch(clearItemFromCart(item));

  const { id, title, price, quantity } = item;
  // console.log(item, "itemsss")
  
  return (
    <div className={styles.item}>
      <div className={styles.delete} onClick={handleClickDelete}>
        <TimesIcon />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>
        <span>{formatPrice(price)}</span>
        <span>تومان</span>
      </div>
      <div className={styles.weight}>
        <span>{quantity}</span>
        <span>عدد</span>
      </div>
      {router.pathname === '/checkout/shipping' && (
        <div className={styles.item_actions}>
          <Button variant='plus' handleClick={handleClickPlus} />
          <Button variant='minus' handleClick={handleClickMinus} />
        </div>
      )}
    </div>
  );
}
