import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import ProductGalleryItem from './product-gallery-item';
import Button from '../ui/button';
import ArrowModal from '../icons/arrow-modal';
import styles from '@/styles/components/product-modal.module.scss';
import imageLoader from "@/helpers/imageLoader";

export default function ProductModal({ images, product_code }) {
  const [activeId, setActiveId] = useState(0);

  const handleClickNext = e => {
    setActiveId(prevId => {
      return prevId < images.length - 1? prevId + 1 : 0
    })
  }

  const handleClickPrev = e => {
    setActiveId(prevId => {
      // let currId = Number(prevId.split('-')[1]);
      // currId = currId > 1 ? currId - 1 : 4;
      // return 'img-0' + currId;
      return prevId > images.length ? prevId - 1 : images.length
    })
  }
  // console.log(activeId)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {images.map((img, index) => (
          <div
            key={index}
            className={cn({
              [styles.current]: true,
              [styles.current_active]: index === activeId
            })}
          >
            <Image src={`/storage/${product_code}/${img}`} loader={imageLoader} alt='product' width={500} height={500} />
          
          </div>
        ))}
      </div>
      <div className={styles.items}>
        <ul className={styles.list}>
          
          {images.map((img, index) => (
            <ProductGalleryItem key={index} img={`/storage/${product_code}/${img}`}
             handleClick={() => setActiveId(index)} />
            
            ))}
        </ul>
      </div>
      <div className={styles.actions}>
            
        <Button variant='modal' handleClick={handleClickNext}>
          <ArrowModal className={styles.icon} />
        </Button>
        <Button variant='modal' handleClick={handleClickPrev}>
          <ArrowModal />
        </Button>
      </div>
    
    </div>
  );
}
