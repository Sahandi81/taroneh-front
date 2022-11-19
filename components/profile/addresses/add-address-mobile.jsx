import { useState } from 'react';
import dynamic from 'next/dynamic';
import FormInput from '../personal-info/form-input';
import Button from '@/components/ui/button';
import styles from '@/styles/components/add-address-mobile.module.scss';

export default function AddAddressMobile() {
  const [city, setCity] = useState({
    value: '',
    error: ''
  });

  const [addressTitle, setAddressTitle] = useState({
    value: '',
    error: ''
  });

  const [phone, setPhone] = useState({
    value: '',
    error: ''
  });

  const [address, setAddress] = useState({
    value: '',
    error: ''
  });

  const MapWithNoSSR = dynamic(() => import('@/components/ui/map'), {
    ssr: false
  });

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'city':
        setCity({ error: '', value });
        break;
      case 'addressTitle':
        setAddressTitle({ error: '', value });
        break;
      case 'phone':
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
          setPhone({ error: '', value });
        }
        break;
      case 'address':
        setAddress({ error: '', value });
        break;
      default:
        break;
    }
  };

  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      {/* <Map /> */}
      <div className={styles.mapContainer}>
        <MapWithNoSSR />
        {/* ndhugyuagdyas */}
      </div>
    
      <div className={styles.form}>
        <FormInput
          id='addressTitle'
          name='addressTitle'
          type='text'
          value={addressTitle.value}
          handleChange={handleChange}
          error={addressTitle.error}
          label='عنوان آدرس'
        />

        <FormInput
          id='city'
          name='city'
          type='text'
          value={city.value}
          handleChange={handleChange}
          error={city.error}
          label='شهر'
        />

        <FormInput
          id='phone'
          name='phone'
          type='text'
          value={phone.value}
          handleChange={handleChange}
          error={phone.error}
          label='تلفن ثابت | موبایل'
        />

        <div className={styles.address}>
          <label htmlFor='address'>آدرس کامل</label>
          <textarea
            id='address'
            name='address'
            onChange={handleChange}
            value={address.value}
            cols={13}
            rows={7}
            required
          ></textarea>
        </div>

        <Button
          type='submit'
          variant='primary'
          handleClick={handleClick}
          rounded
        >
          ثبت آدرس
        </Button>
      </div>
    </div>
  );
}
