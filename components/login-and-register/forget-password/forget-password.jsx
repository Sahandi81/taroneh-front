import Link from 'next/link';
import { useEffect, useState } from 'react';

import TimesIcon from '../../icons/times-icon';
import ForgetPasswordStepOne from './forget-password-step-one';
import ForgetPasswordStepTwo from './forget-password-step-two';

import {
  MSG_PASSWORD_LENGTH,
  MSG_CONFIRM_PASSWORD_DIFF,
  MSG_PHONE_LENGTH
} from '@/data/messages';

import styles from '@/styles/components/forget-password.module.scss';
import { useCompleteProfileMutation, useSendVerificationCodeMutation, useVerifyCodeMutation } from '@/app/services/apiSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setCredentials } from '@/features/auth/authSlice';

export default function ForgetPassword() {
  const [phone, setPhone] = useState({
    value: '',
    error: ''
  });

  const [recoveryCode, setRecoveryCode] = useState({
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
  
  const [step, setStep] = useState(1);
  const [sendVerificationCode] = useSendVerificationCodeMutation();
  const [verifyCode] = useVerifyCodeMutation();
  const [completeProfile] = useCompleteProfileMutation()
  const handleChange =async( e )=> {
    const { name, value } = e.target;
   
    switch (name) {
      case 'phone':
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
          setPhone({ error: '', value });
        }
        break;
      case 'recoveryCode':
        setRecoveryCode({ error: '', value });
        break;
      case 'password':
        setPassword({ error: '', value });
        break;
      case 'confirmPassword':
        setConfirmPassword({
          error: '',
          value
        });
        break;
      default:
        break;
    }
  };
  useEffect(()=>{
    if(step > 2){
      setStep(2);
    }
  },[step])
  const dispatch = useDispatch();
  const router = useRouter()
  const sendCodeVerify =async ()=>await sendVerificationCode(phone.value).unwrap();
  // console.log(step)
  const handleSubmit =async e => {
    e.preventDefault();
    
    if (phone.value.length < 11) {
      
      setPhone(prevPhone => ({ ...prevPhone, error: MSG_PHONE_LENGTH }));
      return;
    }else if( step === 1){
      
       sendVerificationCode(phone.value).unwrap();
    }

    if (step < 2) {
      setStep(prevStep =>step < 2 && ++prevStep);
      return;
    }

    if (password.value.length < 6) {
      setPassword(prevPassword => ({
        ...prevPassword,
        error: MSG_PASSWORD_LENGTH
      }));
      return;
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPassword(prevState => ({
        ...prevState,
        error: MSG_CONFIRM_PASSWORD_DIFF
      }));
      return;
    }
    // console.log('valiii', step)
     if(step === 2){
      const vCode = Object.values(recoveryCode.value).join('');
      // try {
        const data = await verifyCode({
            phone: phone.value,
            code: vCode
        }).unwrap();
        // console.log(data);
        if(data.success) {
      

        
        
          dispatch(setCredentials({f_name: "کاربر",
          l_name: 'گرامی',
          email: "",
          password:password,
          phone: phone.value,
          address: '',
          photos: ['avatar.png'], token: data.token }));
          setTimeout(() => router.replace("/"), 300);
          const user = await completeProfile({
            password: password.value
          }).unwrap();
          
        }
    }
    
  };

  let innerForm;
  switch (step) {
    case 1:
      innerForm = (
        <ForgetPasswordStepOne
          handleChange={handleChange}
          value={phone.value}
          error={phone.error}
        />
      );
      break;
    case 2:
      innerForm = (
        <ForgetPasswordStepTwo
          handleChange={handleChange}
          recoveryCode={recoveryCode.value}
          password={password.value}
          confirmPassword={confirmPassword.value}
          errorRecoveryCode={recoveryCode.error}
          errorPassword={password.error}
          errorConfirmPassword={confirmPassword.error}
          sendCodeVerify={sendCodeVerify}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <div>
            <Link href='/'>
              <a>
                <TimesIcon className={styles.close} />
              </a>
            </Link>
          </div>
          <p>بازیابی رمز عبور</p>
        </div>
        <div className={styles.inner_form}>
          <form onSubmit={handleSubmit}>{innerForm}</form>
        </div>
      </div>
    </div>
  );
}
