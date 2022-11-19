import Image from 'next/image';
import ProductGalleryItem from './product-gallery-item';
import styles from '@/styles/components/product-gallery.module.scss';
import {API_URL} from "@/config/index";
import imageLoader from "@/helpers/imageLoader";

export default function ProductGallery({ img, images, handleClickItem, product_code }) {



  return (
    <section className={styles.container}>
      <div className={styles.item}>
        {/* {images.map(({ id, img }) => (
          <div key={id} className={styles.current}>
            <Image
              src={img}
              alt='product'
              width={392}
              height={392}
              placeholder='blur'
              blurDataURL={img}
            />
          </div>
        ))} */}
        <Image loader={imageLoader} src={`/storage/${product_code}/${img}`} alt='product' width={392} height={392} placeholder='blur' blurDataURL={`${API_URL}/storage/${product_code}/${img}`} />
      </div>
      <div className={styles.items}>
        <ul className={styles.list}>
        {images.map((img, index) => (
          <ProductGalleryItem
            key={index}
            img={`/storage/${product_code}/${img}`}
            handleClick={handleClickItem}
          />
        ))}
          {/* <ProductGalleryItem img={img} handleClick={handleClickItem} />
          <ProductGalleryItem img={img} handleClick={handleClickItem} />
          <ProductGalleryItem img={img} handleClick={handleClickItem} />
          <ProductGalleryItem img={img} handleClick={handleClickItem} /> */}
        </ul>
      </div>
    </section>
  );
}
