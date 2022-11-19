import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/logo-mobile.module.scss'

export default function LogoMobile() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a>
          <Image src='/logo-mobile.png' alt='Tarone Logo' width={300} height={123} />
        </a>
      </Link>
    </div>
  )
}
