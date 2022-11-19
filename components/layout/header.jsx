import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from '../ui/logo';
import LogoMobile from '../ui/logo-mobile';
import Navigation from './navigation';
import NavigationMobile from './navigation-mobile';
import Modal from '../ui/modal';
import OrderTracking from '../profile/order-tracking';

import styles from '@/styles/layout/header.module.scss';

export default function Header({categories}) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // console.log(categories);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <header className={styles.container}>
      <Logo width={110} height={110} />
      {router.pathname === '/' && (
        <>
          <LogoMobile />
          <button onClick={handleOpen} className={styles.orderTrackButton}>
            پیگیری خرید
          </button>
        </>
      )}
      <Navigation categories={categories} />
      <NavigationMobile />
      <Modal onClose={handleClose} show={show} title='پیگیری خرید'>
        <OrderTracking handleClose={handleClose} />
      </Modal>
      
    </header>
  );
}
