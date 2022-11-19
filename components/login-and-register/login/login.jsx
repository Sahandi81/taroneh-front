import Link from 'next/link';
import { useState } from 'react';

import TimesIcon from '../../icons/times-icon';
import styles from '@/styles/components/login.module.scss';
import { MSG_PHONE_LENGTH } from '@/data/messages';
import LoginStep1 from './login-step-1';
import LoginStep2 from './login-step-2';
import LoginStep3 from './login-step-3';
import { useSendVerificationCodeMutation } from '@/app/services/apiSlice';

export default function Login() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState({
    value: '',
    error: ''
  });
  const [sendVerificationCode]= useSendVerificationCodeMutation();
  
  const  handleClickNextStep = async(e) => {
    setStep(prevStep => prevStep < 3 ? prevStep + 1:prevStep);
    if (step === 2) {
      const data = await sendVerificationCode(phone.value).unwrap();
      if (phone.value.length < 11) {
        setPhone(prevPhone => ({
          ...prevPhone,
          error: MSG_PHONE_LENGTH
        }));
        return;
      }
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    const re = /^[0-9\b]+$/;

    if (value === '' || re.test(value)) {
      setPhone({ error: '', value });
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
          <h2 className={styles.active}>ورود</h2>
          <h2>
            <Link href='/register'>ثبت نام</Link>
          </h2>
        </div>
        <div className={styles.form}>
          {step === 1 && <LoginStep1 handleClick={handleClickNextStep} />}
          {step === 2 && (
            <LoginStep2
              phone={phone}
              handleClick={handleClickNextStep}
              handleChange={handleChange}
            />
          )}
          {step === 3 && <LoginStep3 phone={phone}
          setStep={setStep}
          sendVerificationCode={sendVerificationCode}
             />}
        </div>
      </div>
    </div>
  );
}
