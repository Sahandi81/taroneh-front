import AddressItemMobile from './address-item-mobile';
import styles from '@/styles/components/address-mobile.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';

export default function AddressMobile({ items }) {

    const user = useSelector(selectUser)
  return (
    <div className={styles.container}>
      {typeof user?.address === Array && user?.address.map(({ id, title, address, phone }) => (
        <AddressItemMobile
          key={id}
          title={title}
          address={address}
          phone={phone}
        />
      ))}
    </div>
  );
}

AddressMobile.defaultProps = {
  items: [
    {
      id: 'adr-01',
      title: 'محل کار',
      address:
        'استان تهران، شهر تهران، کاووسیه ، خیابان گاندی جنوبی ، خیابان بیست و یکم ، پلاک 28 ، طبقه نهم',
      phone: '09381234567'
    },
    {
      id: 'adr-02',
      title: 'منزل',
      address:
        'استان تهران، شهر تهران، کاووسیه ، خیابان گاندی جنوبی ، خیابان بیست و یکم ، پلاک 28 ، طبقه نهم',
      phone: '09381234567'
    }
  ]
};
