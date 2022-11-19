import Image from 'next/image';
import Link from 'next/link'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import ArrowLeftIcon from '../icons/arrow-left-dark-1-icon';
import ArrowLeftLight from '../icons/arrow-left-light-icon';
import SwiperItem from './swiper-item';
import styles from '@/styles/components/swiper.module.scss';
import imageLoader from "@/helpers/imageLoader";

// SwiperCore.use([Navigation]);

export default function Swiper({ title, headColor, backColor, items, id, img , slug, product_code}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backColor || '#f4f6f9' }}
    >
      <div
        className={styles.header}
        style={{ backgroundColor: headColor || 'transparent' }}
      >
        <h3>{title}</h3>
        <Link 
        href={'/products?type=new-products'}
        // href={`/products?type=${slug}`} 
        passHref>
        <p>
          بیشتر
          <ArrowLeftIcon className={styles.icon} />
        </p>
        </Link>
      </div>
      
      <div className={styles.content}>
      <div className={styles.img}>
        <Image
          src={img}
          alt={title}
          width={231}
          height={271}
          placeholder='blur'
          blurDataURL={img}
        />
      </div>
      <SwiperContainer
        className={styles.swiperContainer}
        slidesPerView={1}
        spaceBetween={32}
        centeredSlides
        breakpoints={{
          400: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            centeredSlides: false
          },
          570: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
            centeredSlides: false
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 32,
            centeredSlides: false
          }
          ,
          1600: {
            slidesPerView: 4,
            spaceBetween: 32,
            centeredSlides: false
          }
        }}
        navigation={{
          nextEl: `.next-${id}`,
          prevEl: `.prev-${id}`
        }}
      >
        {items.map(({ id, types, ...otherProps }) => (
          <SwiperSlide key={id}>
            <SwiperItem types={types} id={id} {...otherProps}  />
          </SwiperSlide>
        ))}
      </SwiperContainer>
      </div>
      {/* BTN Next - BTN Prev */}
      <div className={`${styles.btn_right} prev-${id}`}>
        <ArrowLeftLight className={styles.arrow} />
      </div>
      <div className={`${styles.btn_left} next-${id}`}>
        <ArrowLeftLight className={styles.arrow} />
      </div>
    </div>
  );
}

