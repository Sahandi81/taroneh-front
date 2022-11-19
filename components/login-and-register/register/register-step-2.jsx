import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '../../ui/button';
import EditIcon from '../../icons/edit-icon';
import Spinner from '../../ui/spinner';
import formatPhoneNumber from '@/helpers/formatPhoneNumber';
import styles from '@/styles/components/register.module.scss';
import Notification from '../../ui/notification';

import useTimer from '@/helpers/useTimer';
import { useSendVerificationCodeMutation } from '@/app/services/apiSlice';

export default function RegisterStep2({
  handleChange,
  phone,
  code,
  handleClick,
  isLoading,
  setStep,setCode
}) {
  const { timer, toggleTimer, setToggleTimer } = useTimer();
  const [color, setColor] = useState('gray');
  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });
  const [sendVerificationCode] = useSendVerificationCodeMutation();
  // const [sendSMS] = useSendVerificationCodeMutation()
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

  useEffect(() => {
    if (
      code[1].length &&
      code[2].length &&
      code[3].length &&
      code[4].length &&
      code[5].length
    ) {
      setColor(null);
    } else {
      setColor('gray');
    }
  }, [code]);

  const handleClickResendCode =async( e) => {
    setToggleTimer(true);
    await sendVerificationCode(phone).unwrap()
  };
  // console.log(phone)
  return (
    <>
      <div style={{ alignSelf: 'center' }}>
        <Image
          src='/img/verify-code.png'
          alt='verify code'
          width={327}
          height={259}
        />
      </div>
      <div className={styles.step2} style={{ alignItems: 'center' }}>
        <div className={styles.step2_top}>
          <p>کد پیامک شده به موبایل رو وارد کن</p>
          <div>
            <span onClick={()=>{ setStep(1);
            setCode({
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  })
  }}><EditIcon /></span>
            <p>&nbsp; {formatPhoneNumber(phone.value)}</p>
          </div>
        </div>

        <div className={styles.verify_code}>
          <input
            id='digit1'
            type='text'
            onChange={handleChange}
            maxLength={1}
            name='1'
            value={code[1]}
            autoFocus
          />
          <input
            id='digit2'
            type='text'
            onChange={handleChange}
            name='2'
            value={code[2]}
            maxLength={1}
          />
          <input
            id='digit3'
            type='text'
            onChange={handleChange}
            name='3'
            value={code[3]}
            maxLength={1}
          />
          <input
            id='digit4'
            type='text'
            onChange={handleChange}
            name='4'
            value={code[4]}
            maxLength={1}
          />
          <input
            id='digit5'
            type='text'
            onChange={handleChange}
            name='5'
            value={code[5]}
            maxLength={1}
          />
        </div>

        {toggleTimer && (
          <div className={styles.timer}>
            <span>00:{timer < 10 ? '0' + timer : timer}</span>
            <span>تا درخواست مجدد کد</span>
          </div>
        )}

        <div className={styles.actions}>
          <Button
            variant='submit-outline'
            handleClick={handleClickResendCode}
            disabled={toggleTimer}
          >
            ارسال مجدد
          </Button>

          <Button
            variant='submit'
            color={color}
            handleClick={handleClick}
            isLoading={isLoading}
            disabled={isLoading}
          >
            عضویت
          </Button>
        </div>
      </div>

      <Notification {...notification} />
    </>
  );
}
