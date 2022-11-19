import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import UserAccountIcon from '../icons/user-acount-icon';
import OrdersIcon from '../icons/orders-icon';
import MyAddressIcon from '../icons/my-address-icon';
import MyFavouriteIcon from '../icons/my-favourite-icon';
import ExitIcon from '../icons/exit-icon';
import styles from '@/styles/components/profile-dropdown.module.scss';


import {
  toggleProfileDropdown,
  toggleSignOutModal
} from '@/features/auth/authSlice';

export default function ProfileDropdown() {
  const router = useRouter();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  // const sel= useSelector(selectUser);
  // console.log(sel)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(toggleProfileDropdown());
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, dispatch]);

  const handleClickExit = () => dispatch(toggleSignOutModal());

  const handleClickItems = routePath => {
    router.push(routePath);
    dispatch(toggleProfileDropdown());
  };
  
  return (
    <div className={styles.container} ref={dropdownRef}>
      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={() => handleClickItems('/profile/personal-info')}
        >
          <UserAccountIcon className={styles.icon} />
          <span>حساب کاربری من</span>
        </li>
        <li
          className={styles.item}
          onClick={() => handleClickItems('/profile/orders')}
        >
          <OrdersIcon className={styles.icon} />
          <span>سفارشات</span>
        </li>
        <li
          className={styles.item}
          onClick={() => handleClickItems('/profile/addresses')}
        >
          <MyAddressIcon className={styles.icon} />
          <span>آدرس های من</span>
        </li>
        <li
          className={styles.item}
          onClick={() => handleClickItems('/profile/favourites')}
        >
          <MyFavouriteIcon className={styles.icon} />
          <span>علاقه های من</span>
        </li>
        <li className={styles.item} onClick={handleClickExit}>
          <ExitIcon className={styles.icon} />
          <span>خروج</span>
        </li>
      </ul>
    </div>
  );
}
