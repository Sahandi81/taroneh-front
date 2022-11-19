import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './form-input';
import AvatarUpload from './avatar-upload';
import Button from '@/components/ui/button';
import styles from '@/styles/components/personal-info.module.scss';
import { selectUser, setCredentials } from '@/features/auth/authSlice';
import {useCompleteProfileMutation} from "@/app/services/apiSlice";
import Notification from '@/components/ui/notification';
export default function UserInfo() {
  const [notification, setNotification] = useState({
    show: false,
    status: null,
    message: ''
  });
  const [firstName, setFirstName] = useState({
    value: '',
    error: ''
  });

  const [lastName, setLastName] = useState({
    value: '',
    error: ''
  });

  const [phone, setPhone] = useState({
    value: '',
    error: ''
  });

  const [email, setEmail] = useState({
    value: '',
    error: ''
  });

  const [telephone, setTelephone] = useState({
    value: '',
    error: ''
  });

  const [avatar, setAvatar] = useState({
    value: '',
    error: ''
  });

  const [completeProfile, { isLoading: isLoading3 }] =
      useCompleteProfileMutation();

  const [gender, setGender] = useState(null);

  const user = useSelector(selectUser);
  const setUserData= useDispatch();
 

  useEffect(() => {
    setFirstName({ error: '', value: user?.f_name || '' });
    setLastName({ error: '', value: user?.l_name || '' });
    setPhone({ error: '', value: user?.phone || '' });
    setEmail({ error: '', value: user?.email || '' });
    setTelephone({ error: '', value: user?.telephone || '' });
    setAvatar({ error: '', value: user?.photos?.length > 0 && user?.photos[0]  || 'avatar.png' });
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;

    const re = /^[0-9\b]+$/;

    switch (name) {
      case 'firstName':
        setFirstName({ error: '', value });
        break;
      case 'lastName':
        setLastName({ error: '', value });
        break;
      case 'phone':
        if (value === '' || re.test(value)) {
          setPhone({ error: '', value });
          return;
        }
        break;
      case 'email':
        setEmail({ error: '', value });
        break;
      case 'telephone':
        if (value === '' || re.test(value)) {
          setTelephone({ error: '', value });
          return;
        }
        break;
      case 'gender':
        setGender(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Update profile avatar and user info
    try {
      const registerData = await completeProfile({
        f_name: firstName.value,
        l_name: lastName.value,
        email: email.value,
        telephone: telephone.value,
        phone:user.phone,
        photos: [avatar.value],
        gender
      }).unwrap();
      // setUserData(setCredentials(registerData.user, ))
      // console.log(registerData, 'dds')
      setNotification({
        show: true,
        status: "success",
        message: 'تغییرات با موفقیت ثبت شد'
      })
      setTimeout(() => {
        setNotification({
          show: false,
          status: null,
          message: ''
        })
      }, 3000);
      
    } catch (error) {
      console.log(error)
      setNotification({
        show: true,
        status: "error",
        message: 'تغییرات  ثبت نشد'
      })
    }
    setTimeout(() => {
      setNotification({
        show: false,
        status: null,
        message: ''
      })
    }, 3000);
  };
  // console.log(user)
  return (
    <div className={styles.user_info}>
      <AvatarUpload id={user?._id} src={avatar.value} onUpload={(filename) => setAvatar({...avatar, value: filename})} />

      <FormInput
        id='firstName'
        name='firstName'
        type='text'
        value={firstName.value}
        handleChange={handleChange}
        error={firstName.error}
        label='نام'
      />

      <FormInput
        id='phone'
        name='phone'
        type='text'
        value={phone.value}
        handleChange={handleChange}
        error={phone.error}
        label='شماره موبایل'
        style={{ textAlign: 'end' }}
        isVerified
        disabled
      />

      <FormInput
        id='lastName'
        name='lastName'
        type='text'
        value={lastName.value}
        handleChange={handleChange}
        error={lastName.error}
        label='نام خانوادگی'
      />

      <FormInput
        id='email'
        name='email'
        type='email'
        value={email.value}
        handleChange={handleChange}
        error={email.error}
        label='ایمیل'
        style={{ textAlign: 'end' }}
      />

      <FormInput
        id='telephone'
        name='telephone'
        type='text'
        value={telephone.value}
        handleChange={handleChange}
        error={telephone.error}
        label='تلفن ثابت (با کد شهر)'
      />

      <div className={styles.gender}>
        <p>
          جنسیت: <span>(اختیاری)</span>
        </p>

        <input
          type='radio'
          name='gender'
          id='male'
          className={styles.radio}
          onChange={handleChange}
          value='1'
        />
        <label htmlFor='male' className={styles.custom_radio}>
          آقا
        </label>

        <input
          type='radio'
          name='gender'
          id='female'
          className={styles.radio}
          onChange={handleChange}
          value='2'
        />
        <label htmlFor='female' className={styles.custom_radio}>
          خانم
        </label>
      </div>

      <Button variant='primary' handleClick={handleSubmit} rounded>
        ذخیره تغییرات
      </Button>
      <Notification {...notification} />
    </div>
  );
}
