import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartMobile, selectCartItems, selectCartTotalPrice } from '@/features/cart/cartSlice';
import { selectUser } from '@/features/auth/authSlice';
import formatPrice from '@/helpers/formatPrice';
import Button from '../ui/button';
import CartItem from './cart-item';
import CartEmptyIcon from '../icons/cart-empty-icon';
import styles from '@/styles/components/cart-dropdown.module.scss';

export default function CartDropdownMobile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const user = useSelector(selectUser);
  const dropdownMRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // debugger;
      if (dropdownMRef.current && !dropdownMRef.current.contains(event.target)) {
        dispatch(toggleCartMobile());
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownMRef, dispatch]);

  const handleClick = () => {
    dispatch(toggleCartMobile());
    if (user) {
      router.push('/checkout/shipping');
    } else {
      router.push('/login');
    }
  }

  return (
    <div className={styles.container} ref={dropdownMRef}>
      {/* Items */}
      {items.length > 0 && (
        <div className={styles.items}>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Actions */}
      {items.length > 0 && (
        <div className={styles.actions}>
          <div className={styles.totalPrice}>
            <label>قیمت کل</label>
            <p>
              {formatPrice(totalPrice)} <span>تومان</span>
            </p>
          </div>
          <Button variant='checkout' rounded handleClick={handleClick}>نهایی کردن خرید</Button>
        </div>
      )}

      {/* Cart Empty */}
      {items.length === 0 && (
        <div className={styles.empty}>
          <h2>سبد خرید</h2>
          <CartEmptyIcon />
          <h3>سبد خرید شما خالی است</h3>
        </div>
      )}
    </div>
  );
}
