import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from '@/styles/layout/navigation-mobile.module.scss';
import { useState, useEffect } from 'react';

import HomeIcon from '../icons/home-icon-mobile';
import SearchIcon from '../icons/search-icon-mobile';
import BasketIcon from '../icons/basket-icon-mobile';
import HeartIcon from '../icons/heart-icon-mobile';
import ProfileIcon from '../icons/profile-icon-mobile';
import CartDropdownMobile from '../cart/cart-dropdown-mobile';
import { toggleCartMobile, selectHiddenMobile } from '@/features/cart/cartSlice';
// import { useEffect } from 'react';
import { useLogoutMutation } from '@/app/services/apiSlice';
import { selectShowProfileDropdown, selectShowSignOutModal, selectUser, toggleProfileDropdown, toggleSignOutModal } from '@/features/auth/authSlice';
import Notification from '../ui/notification';
import Modal from '../ui/modal';
import SignOutModal from '../profile/sign-out-modal';
import { LOGOUT_ERROR } from '@/data/messages';

export default function NavigationMobile({ items }) {
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
  const user = useSelector(selectUser);
  const [logout, { isLoading }] = useLogoutMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const showSignOutModal = useSelector(selectShowSignOutModal);
  const showProfileDropdown = useSelector(selectShowProfileDropdown);

  const handleClose = () => dispatch(toggleSignOutModal());
  const handleClickExit = () => dispatch(toggleSignOutModal());
  
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
  
  const hidden = useSelector(selectHiddenMobile);

  const handleClick = routePath => {
    if (routePath !== '/basket') {
      router.push(routePath);
    } else {
      dispatch(toggleCartMobile());
    }
  };

  return (
    <>
    <nav className={styles.container}>
      {items.map(({ id, title, routePath, icon }) => (
        <div
          key={id}
          className={cn(styles.item, {
            [styles.active]: routePath === router.pathname || (!hidden && id === 'basket')
          })}
          onClick={() => handleClick(routePath)}
        >
          {icon}
          <div className={styles.title}>{title}</div>
        </div>
      ))}
       {user?.token? <div
          // key={id}
          className={styles.item}
          style={{margin:'0 auto'}}
          onClick={() => handleClickExit()}
        >
      <img style={{marginRight:'.5rem', marginTop:'-.3rem'}} width={42} height={42}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2ZT2wUZRjGn/ebrbYl4J+EdrYgRY7WxEiV2t0Z2hACsjuzhgMHDQeDmJA0QCQgwfSEMUKMTWj4oxcPGBMNB6C7paVGwO4uDQQFDySehIQwM9sKIgZSdzvf60GMWsH5ZnbRy/6OM8/7fc+TfP/mG6BOnTp16tSJDtWysVKmq1XKhhSIeiC5A4TFAObde30bjKsQdBnAGUHlkdahc6Va9V2TIE46aRLRDgAGM0ZBdJrIv4QZ7ao+efcWAHgtzY9Dw9MMPEfgFQBWA5Rn4g/asoVCtR6qClJKG0ukwCCApcy8GzR9uC37zV2VWsfubBZofo0ZOwH+nkhs0bPjV6J6iRzEs41XmTEI5kGqzBnQx8buRGmHOzsbPL1pGwjbiWmzPpz/PKqn0LhpY6drGZNOavnyWrVZshLdrmW4rm3siVIvwhY4ltEPwnqpic62E+PjUTq9H625sxNM6AIj7VhGf9j6UEPr3nAakJpYtuD4+LWwnang2MYiYpwn8FY9V/xCtU45SCltLJGEcwIy05o7OxHNphrXM2ZSSD5GJJapLgDKQ0uK3yf2ww4BAAuG8kUCDzDLfao1SkGcdNIEsJQqcwYiuwvJjaZbHwLouJ4xkyp6pSBEtIOZd0ddYqPQceRymRl7hcTbKvrAIKVMVysAAzR9uGp3IRGV5s8ANr21iZZAbZBAyoYUM0ZVd+xaoo+N3QHjSy7TmiBt8NAi6gHR6Zo4iwALPgWgN0gXHIT5WSL/Ui1MRUEA34FEh4IukHbGI5EPc1UT4x8AXhwkUwky76fGqds1sBSJX6Yf+xl/ftM8EJUgM09MN8aqtxSNub4fAzATpFMJMgX/0flRjXi2udGzzY1R67m5PB/MU0E6hSA0KSD0yEaYFzLzwqj15Fd0EE0G6QKDEPO30NAV1Ui1SIhuMC4E6RT2ET7NQE9NXEVByh4AZ4JkgUHYF6fA6L2xpitw5ag1N1eufIyITBaxwA05MEh8JD/FwGgl1vB6beypM9306wYAw23ZMz8GadVOv6B9zNh6pbe3sWp3ilxb191EUm5hyYMqeqUg8Vz+PBgXGuf671RnTx1tWvQzaKLtRDFwogMhvhCFVtkC5jedtNEZ3Z4aTir5AjFt0LTKW6o1ykFah86ViGgTEY45trEomsVgnFSiXQg6RkSbwlyphroO0rP54wD2kMTI/cJ4lnGxZCW6g9rx7ORLnmVcnP3cSSXaSYhRZnrvXl/KhL7XiucKB0jgY2IUXTvx4l/fSYldEuKoaycfeOx2XzGfYaajTPy3+eZa5jIhRBHgA/Hh/KGwvkIHAQA9Wxhkpo1gkXMs433H7mwGgLYThVEibAPTiJNKtM+uc2xjEXweZfD2eLY4AgDeqlVzXMvYC3BWktwQzxX3R/FU1SW2tzbRwhWxB8AKEO+fKctPnjo5cdNLm5uZuA8+mdC4DwDg0wFonCfCQT1bGLy2uvvJWEPsDYD7AHxFDXKXfvRs4JnqoQT5g+uZ5c+TL/uIkInnCi0A4FnGu8x4GQJfAwAkegg4qQ8X+gHAtYxJBh9noR1cMDT+j/nyvzL7GONa5iHXNsqubZS9tPHRv2mrpaZ/rGbD69Zp7l33UyKQ3hRfT0eO+A+zvzp16tSp85/zG3TYz4WW7cqVAAAAAElFTkSuQmCC"/>             <div className={styles.title}>خروج</div>
        </div>:null}
      {!hidden && <CartDropdownMobile />}
    </nav>
    <Modal onClose={handleClose} show={showSignOutModal}>
        <SignOutModal
          handleClickNo={handleClose}
          handleClickOk={handleClickOk}
          isLoading={isLoading}
        />
      </Modal>
      <Notification {...notification} />
    </>
  );
}

NavigationMobile.defaultProps = {
  items: [
    {
      id: 'home',
      title: 'خانه',
      routePath: '/',
      icon: <HomeIcon className={styles.icon} />
    },
    {
      id: 'search',
      title: 'جستجو',
      routePath: '/search?type=new-products',
      icon: <SearchIcon className={styles.icon} />
    },
    {
      id: 'basket',
      title: 'سبد خرید',
      routePath: '/basket',
      icon: <BasketIcon className={styles.icon} />
    },
    {
      id: 'favourites',
      title: 'علاقمندی‌ها',
      routePath: '/profile/favourites',
      icon: <HeartIcon className={styles.icon} />
    },
    {
      id: 'profile',
      title: 'پروفایل',
      routePath: '/profile/personal-info',
      icon: <ProfileIcon className={styles.icon} />
    }
  ]
};
