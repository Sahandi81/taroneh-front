import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount, toggleCart } from '@/features/cart/cartSlice';
import BasketIcon from '../icons/basket-icon';
import styles from '@/styles/components/basket.module.scss';

export default function Basket() {
  const dispatch = useDispatch();
  const count = useSelector(selectCartItemsCount);
  
  return (
    <div className={styles.container} onClick={() => dispatch(toggleCart())}>
      <BasketIcon className={styles.icon} />
      <span data-value={count}>{count}</span>
    </div>
  );
}
