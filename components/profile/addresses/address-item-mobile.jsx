import Button from '@/components/ui/button';
import styles from '@/styles/components/address-item-mobile.module.scss'

export default function AddressItemMobile({title, address, phone}) {
  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>

        <p>عنوان آدرس</p>

        <h4>{title}</h4>
        
        <Button variant='blue-outline' rounded>ویرایش</Button>

      </div>

      {/* address */}
      <p className={styles.address}>{address}</p>

      <div className={styles.footer}>
        <p>شماره تلفن</p>
        <h4>{phone}</h4>
      </div>
    </div>
  )
}