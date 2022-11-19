import Image from 'next/image';
import { useState, useEffect } from 'react';

import Button from '../../ui/button';
import EditIcon from '../../icons/edit-icon';
import formatPhoneNumber from '@/helpers/formatPhoneNumber';
import useTimer from '@/helpers/useTimer';
import Notification from '../../ui/notification';
import styles from '@/styles/components/login.module.scss';
import { MSG_INVALID_CREDENTIALS, MSG_INVALID_VERIFY_CODE } from '@/data/messages';
import { useCompleteProfileMutation, useVerifyCodeMutation } from '@/app/services/apiSlice';
import { setCredentials } from '@/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export default function LoginStep3({ phone,  setStep ,sendVerificationCode}) {
  const [verifyCode] = useVerifyCodeMutation();
  const [completeProfile] = useCompleteProfileMutation();
  const [color, setColor] = useState('gray');
  const [code, setCode] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  });
  const router = useRouter();
  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });
  const { timer, toggleTimer, setToggleTimer } = useTimer();
  const dispatch = useDispatch(); 
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
  
  const handleChange = e => {
    const { name, value } = e.target;
    const re = /^[0-9\b]+$/;

    if (value === '' || re.test(value)) {
      setCode(prevCode => ({ ...prevCode, [name]: value }));
      if (e.target.nextSibling && value.length) e.target.nextSibling.focus();
    }
  };

  const handleClickSendCode = () => {
   
  };

  const handleClickResendCode =async( e )=> {
    setToggleTimer(true);
   await sendVerificationCode(phone.value).unwrap()
  };

  const handleClickLogin = async(e) => {
    if (
      !code[1].length ||
      !code[2].length ||
      !code[3].length ||
      !code[4].length ||
      !code[5].length
    ) {
      setNotification({
        show: true,
        status: 'error',
        message: MSG_INVALID_VERIFY_CODE
      });
      return;
    }else{
      const vCode = Object.values(code).join('');
      // try {
        const data = await verifyCode({
            phone: phone.value,
            code: vCode
        }).unwrap();
        // console.log(data);
        if(data.success) {
          // console.log(data)
        //  await completeProfile({
        //   f_name: "کاربر",
        //   l_name: 'گرامی',
        //   email: "",
        //   password: "1234567",
        //   phone: phone.value,
        //   address: '',
        //   photos: ['avatar.png']
        // }).unwrap();

        // console.log(data)
        
          dispatch(setCredentials({ f_name: "کاربر",
          l_name: 'گرامی',
          email: "",
          password: "1234567",
          phone: phone.value,
          address: '',
          token:data.token,
          photos: ['avatar.png'], token: data.token }));
          setTimeout(() => router.replace("/"), 300);
        }
      // } catch (error) {
      //   setNotification({
      //     show: true,
      //     status: "error",
      //     message: MSG_INVALID_CREDENTIALS,
      //   });
      // }
      // const data = await verifyCode({
      //   phone: phone.value,
      //   code: vCode
      // }).unwrap().then(res=>{});
    }
  };

  return (
    <>
      <div className={styles.step3} style={{ alignItems: 'center' }}>
        <div className={styles.step3_top}>
          <p>کد پیامک شده به موبایل رو وارد کن</p>
          
          <div>
           <span onClick={()=>{ setStep(1);
            
  }}><EditIcon /></span> 
            <p>&nbsp; {formatPhoneNumber(phone.value)}</p>
          </div>
        </div>

        <div className={styles.verify_code}>
          <input
            type='text'
            onChange={handleChange}
            maxLength={1}
            name='1'
            value={code[1]}
            autoFocus
          />
          <input
            type='text'
            onChange={handleChange}
            name='2'
            value={code[2]}
            maxLength={1}
          />
          <input
            type='text'
            onChange={handleChange}
            name='3'
            value={code[3]}
            maxLength={1}
          />
          <input
            type='text'
            onChange={handleChange}
            name='4'
            value={code[4]}
            maxLength={1}
          />
          <input
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
            handleClick={handleClickLogin}
            // isLoading={isLoading}
            // disabled={isLoading}
          >
            ورود
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src='/img/verify-code.png'
          alt='verify code'
          width={327}
          height={259}
        />
      </div>
      <Notification {...notification} />
    </>
  );
}
