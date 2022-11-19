import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/logo.module.scss'

export default function Logo({width, height}) {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a>
          <Image src='/logo.png' alt='Tarone Logo' width={width} height={height} />
        </a>
      </Link>
    </div>
  );
}
