import FeatureItem from './feature-item';
import PriceIcon from '../../icons/price-icon';
import SupportIcon from '../../icons/support-icon';
import DeliveryIcon from '../../icons/delivery-icon';
import PriceIconMobile from '../../icons/price-icon-mobile';
import SupportIconMobile from '../../icons/support-icon-mobile';
import DeliveryIconMobile from '../../icons/delivery-icon-mobile';

import styles from '@/styles/components/features.module.scss';

export default function FeaturesList() {
  return (
    <section className='section mt-3'>
      <div className={styles.container}>
        <FeatureItem title='مناسب‌ترین قیمت' Icon={PriceIcon} desktop />
        <FeatureItem title='مشاوره و پشتیبانی' Icon={SupportIcon} desktop />
        <FeatureItem title='ارسال سریع' Icon={DeliveryIcon} desktop />

        <FeatureItem title='مناسب‌ترین قیمت' Icon={PriceIconMobile} mobile />
        <FeatureItem title='مشاوره و پشتیبانی' Icon={SupportIconMobile} mobile />
        <FeatureItem title='ارسال سریع' Icon={DeliveryIconMobile} mobile />
      </div>
    </section>
  );
}
