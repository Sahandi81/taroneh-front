import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHidden } from '@/features/cart/cartSlice';

import Basket from '../ui/basket';
import Search from '../ui/search';
import Button from '../ui/button';
import Modal from '../ui/modal';
import UserNavProfile from '../profile/user-nav-profile';
import DropdownMenu from './dropdown-menu';
import CartDropdown from '../cart/cart-dropdown';
import OrderTracking from '../profile/order-tracking';
import SignOutModal from '../profile/sign-out-modal';

import {useLogoutMutation} from '@/app/services/apiSlice';
import { LOGOUT_ERROR } from '@/data/messages';
import {
  toggleSignOutModal,
  selectShowSignOutModal,
  clearCredentials,
  toggleProfileDropdown,
  selectShowProfileDropdown
} from '@/features/auth/authSlice';


import styles from '@/styles/layout/navigation.module.scss';
import Notification from '../ui/notification';
import {useGetCategoriesQuery} from "@/app/services/shopApi";

function NavigationTop() {
  const hidden = useSelector(selectHidden);

  return (
    <nav className={styles.container_top}>
      <ul className={styles.right}>
        <li>
          <Link href='/blog'>
            <a className={styles.link}>بلاگ</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={styles.link}>داستان ما</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className={styles.link}>تماس با ما</a>
          </Link>
        </li>
      </ul>
      <Search />
      <div className={styles.left}>
        <UserNavProfile />
        <div className={styles.divider} />
        {/* uidhsaugfdgfdfdgfd */}
        <div style={{ position: 'relative' }}>
          <Basket />
          {!hidden && <CartDropdown />}
        </div>
      </div>
    </nav>
  );
}

 function NavigationBottom({categories}) {
  const [show, setShow] = useState(false);
  //  const [categories, setCategories] = useState();

  const { data, error, isLoading } = useGetCategoriesQuery();
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
    // useEffect(()=>{
    //   const res =  ServiceCaller('api/categories');
    //    setCategories(res?.details.data);
    // },[])
  
  // console.log("sauidsaygu", categories);
  return (
    <nav className={styles.container_bottom}>
      <ul className={styles.list}>
        {
          categories?.map((category, index) => (
             categories[categories.length - index -1].sub_category.length > 0? <Link key={categories[categories.length - index -1]._id} href={`/products?category=${categories[categories.length - index -1]._id}`} passHref>
            <li >
              {categories[categories.length - index -1].name}<DropdownMenu category={categories[categories.length - index -1]} />
            </li>
              </Link>:null
          ))
        }
      </ul>
      <Button color='primary-outline' onClick={handleOpen}>
        پیگیری خرید
      </Button>

      <Modal onClose={handleClose} show={show} title='پیگیری خرید'>
        <OrderTracking handleClose={handleClose} />
      </Modal>
    </nav>
  );
}

function Navigation({categories}) {
  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });
  // console.log(categories)
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({
          show: false,
          status: null,
          message: ''
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const [logout, { isLoading }] = useLogoutMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const showSignOutModal = useSelector(selectShowSignOutModal);
  const showProfileDropdown = useSelector(selectShowProfileDropdown);

  const handleClose = () => dispatch(toggleSignOutModal());

  const handleClickOk = async () => {
    if (showProfileDropdown) {
      dispatch(toggleProfileDropdown());
    }

    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      setTimeout(() => router.replace('/'), 200);
    } catch (error) {
      setNotification({
        show: true,
        status: 'error',
        message: LOGOUT_ERROR
      });
    }
    dispatch(toggleSignOutModal());
  };

  return (
    <div className={styles.container}>
      <NavigationTop />
      <NavigationBottom categories={categories} />

      <Modal onClose={handleClose} show={showSignOutModal}>
        <SignOutModal
          handleClickNo={handleClose}
          handleClickOk={handleClickOk}
          isLoading={isLoading}
        />
      </Modal>

      <Notification {...notification} />
    </div>
  );
}

export default Navigation;