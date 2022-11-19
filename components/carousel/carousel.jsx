import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/styles/components/carousel.module.scss';

export default function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timeout;
    if (autoplay) {
      timeout = setTimeout(() => {
        setActiveIndex(prevActiveIndex =>
          prevActiveIndex === 4 ? 0 : ++prevActiveIndex
        );
      }, 5000);
    }
    if (timeout) return () => clearTimeout(timeout);
  }, [autoplay, activeIndex]);

  const handleClickIndicator = idx => {
    setActiveIndex(idx);
    setAutoplay(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`${styles.item} ${
              activeIndex === idx ? styles.item_active : ''
            }`}
          >
            <div>
              <Image
                src={item.img}
                alt={item.title}
                // width={1166}
                // height={325}
                layout='fill'
                placeholder='blur'
                blurDataURL={item.img}
              />
            </div>
          </div>
        ))}
      </div>
      <ul className={styles.indicators}>
        {items.map((item, idx) => (
          <li
            key={item.id}
            className={`${activeIndex === idx ? styles.selected : ''}`}
            onClick={() => handleClickIndicator(idx)}
          />
        ))}
      </ul>
    </div>
  );
}

Carousel.defaultProps = {
  items: [
    { id: 'item-01', title: 'Nuts', img: '/img/hero-01.jpg' },
    { id: 'item-02', title: 'Nuts', img: '/img/hero-02.jpg' },
    { id: 'item-03', title: 'Nuts', img: '/img/hero-03.jpg' },
    { id: 'item-04', title: 'Nuts', img: '/img/hero-04.jpg' },
    { id: 'item-05', title: 'Nuts', img: '/img/hero-05.jpg' }
  ]
};
