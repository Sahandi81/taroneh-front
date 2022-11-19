import Image from 'next/image';
import Container from '../ui/container';
import Information from './information';
import Form from './form';
import styles from '@/styles/components/contact-page.module.scss';
import { useState } from 'react';
import Notification from '@/components/ui/notification';
export default function Contact() {
  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });
  return (
    <section className='section'>
      <div className={styles.container}>
        <Container title='تماس با ما'>
          <div className={styles.body}>
            <div className={styles.top}>
              <div className={styles.img}>
                <Image
                  src='/img/contact-page.png'
                  alt='Contact Us'
                  width={707}
                  height={551}
                  placeholder='blur'
                  blurDataURL='/img/contact-page.png'
                />
              </div>
              <Information />
            </div>
            <div className={styles.bottom}>
              <Form notification={notification} setNotification={setNotification} />
            </div>
          </div>
        </Container>
      </div>
      <Notification {...notification}/>
    </section>
  );
}
