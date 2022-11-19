import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import {
  useCompleteProfileMutation,
  useSendVerificationCodeMutation,
  useVerifyCodeMutation
} from '@/app/services/apiSlice';

import { setCredentials } from '@/features/auth/authSlice';
import TimesIcon from '../../icons/times-icon';
import Notification from '@/components/ui/notification';

import RegisterStep1 from './register-step-1';
import RegisterStep2 from './register-step-2';

import validateEmail from '@/helpers/validateEmail';
import {
  MSG_PHONE_LENGTH,
  MSG_INVALID_VERIFY_CODE,
  MSG_ERROR_SEND_VERIFICATION_CODE,
  MSG_REGISTERATION_COMPLETED,
  MSG_PASSWORD_LENGTH,
  MSG_ERROR_IN_REGISTERATION,
  MSG_CONFIRM_PASSWORD_DIFF,
  MSG_INVALID_EMAIL
} from '@/data/messages';

import styles from '@/styles/components/register.module.scss';

export default function Register() {
  const [email, setEmail] = useState({
    value: '',
    error: ''
  });

  const [phone, setPhone] = useState({
    value: '',
    error: ''
  });

  const [password, setPassword] = useState({
    value: '',
    error: ''
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: ''
  });

  const [code, setCode] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  });

  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        if (notification.status === 'success') {
          router.push('/');
        }
        setNotification({
          show: false,
          status: null,
          message: ''
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const [sendVerificationCode, { isLoading: isLoading1 }] =
    useSendVerificationCodeMutation();
  const [verifyCode, { isLoading: isLoading2 }] = useVerifyCodeMutation();
  const [completeProfile, { isLoading: isLoading3 }] =
    useCompleteProfileMutation();

  const handleChange = e => {
    const { id, name, value } = e.target;
    const re = /^[0-9\b]+$/;

    if (id && id.includes('digit')) {
      if (value === '' || re.test(value)) {
        setCode(prevCode => ({ ...prevCode, [name]: value }));
        if (e.target.nextSibling && value.length) e.target.nextSibling.focus();
      }
      return;
    }

    switch (name) {
      case 'email':
        setEmail({ error: '', value });
        break;
      case 'phone':
        if (value === '' || re.test(value)) {
          setPhone({ error: '', value });
          return;
        }
        break;
      case 'password':
        setPassword({ error: '', value });
        break;
      case 'confirmPassword':
        setConfirmPassword({ error: '', value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email.value.length) {
      // if (!validateEmail(email.value)) {
        // setEmail(prevEmail => ({ ...prevEmail, error: MSG_INVALID_EMAIL }));
        // return;
      // }
    }

    if (phone.value.length < 11) {
      setPhone(prevPhone => ({ ...prevPhone, error: MSG_PHONE_LENGTH }));
      return;
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPassword(prevState => ({
        ...prevState,
        error: MSG_CONFIRM_PASSWORD_DIFF
      }));
      return;
    }

    if (password.value.length < 6) {
      setPassword(prevState => ({
        ...prevState,
        error: MSG_PASSWORD_LENGTH
      }));
      return;
    }
    if (step === 2) {
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
      }
    }

    switch (step) {
      case 1:
        try {

          const data = await sendVerificationCode(phone.value).unwrap();
          if (data.success) {
            setStep(prevStep => ++prevStep);
          } else {
            setNotification({
              show: true,
              status: 'error',
              message: MSG_ERROR_SEND_VERIFICATION_CODE
            });
          }
        } catch (error) {
          setNotification({
            show: true,
            status: 'error',
            message: MSG_ERROR_SEND_VERIFICATION_CODE
          });
        }
        

        break;
      case 2:
        const vCode = Object.values(code).join('');
        try {
          const data = await verifyCode({
            phone: phone.value,
            code: vCode
          }).unwrap();
          const registerData = await completeProfile({
            f_name: email.value,
            l_name: email.value,
            email: `${phone.value+ email.value }@gmail.com`,
            password: password.value,
            phone: phone.value,
            address: []
          }).unwrap();
          // console.log(registerData, 'registerData')
          dispatch(setCredentials({...registerData.user , address:[], token: data.token}));
          setNotification({
            show: true,
            status: 'success',
            message: MSG_REGISTERATION_COMPLETED
          });

          setTimeout(() => router.replace('/'), 300);

        } catch (error) {
          console.log(error)
          setNotification({
            show: true,
            status: 'error',
            message: MSG_INVALID_VERIFY_CODE
          });
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div>
            <Link href='/'>
              <a>
                <TimesIcon className={styles.close} />
              </a>
            </Link>
          </div>
          <h2>
            <Link href='/login'>ورود</Link>
          </h2>
          <h2 className={styles.active}>ثبت نام</h2>
        </div>
        <div className={styles.form}>
          {step === 1 && (
            <RegisterStep1
              email={email}
              phone={phone}
              password={password}
              confirmPassword={confirmPassword}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading1}
            />
          )}
          {step === 2 && (
            <RegisterStep2
              handleChange={handleChange}
              handleClick={handleSubmit}
              phone={phone}
              setStep={setStep}
              code={code}
              setCode={setCode}
              isLoading={isLoading2 || isLoading3}
            />
          )}
        </div>
      </div>
      {/* {step === 2 && (
        <div className={styles.validationCode}>
          <p>کد پیامک شده به موبایل را وارد نمایید</p>
          <p>شماره شما: &nbsp; {formatPhoneNumber(phone.value)}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>{innerForm}</form>
      <Notification {...notification} /> */}
      <Notification {...notification} />
    </div>
  );
}
