import { useState, useEffect } from 'react';
import IncredibleOffersItem from './incredible-offers-item';

import styles from '@/styles/components/incredible-offers-desktop.module.scss';
import ServiceCaller from '@/helpers/serviceCall';

export default function IncredibleOffersList({ items, activeIndex, setActiveIndex }) {
  
  
   useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevState => (prevState === items.products.length ? 1 : prevState + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  // console.log(items)
  return (
    <div className={styles.list}>
      {items.products.map((item, index) => (
        <IncredibleOffersItem
          key={item._id}
          rowNumber={index + 1}
          isActive={index + 1 === activeIndex ? true : false}
          {...item}
        />
      ))}
    </div>
  );
}

IncredibleOffersList.defaultProps = {
  items: [
    { id: 'product-01', name: 'خرما', percent: '20'},
    { id: 'product-02', name: 'آجیل', percent: '30' },
    { id: 'product-03', name: 'رطب', percent: '15' },
    { id: 'product-04', name: 'آناناس خشک', percent: '35' },
    { id: 'product-05', name: 'بادام هندی', percent: '5' }
  ]
};
