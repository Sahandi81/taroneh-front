import useViewport from '@/helpers/useViewport';
import Swiper from '../../swiper/swiper';
import DATA from '@/data/data';
import ReceptionBoxesMobile from './reception-boxes-mobile';

export default function ReceptionBoxes({products}) {
  const { isDesktop } = useViewport();
  // const { items } = DATA;
  
  const pr = []
  products.map(mp=>mp?pr.push(mp):null)
  const items = pr?.slice(0,5).map(item => ({
    id: item._id,
    name: item.title,
    slug: item._id,
    price: item.amount,
    percent: item.amount,
    img: item.photos.length ? item.photos[0] : 'logo.png',
    images: item.photos,
    types: item.types,
    product_code: item.photos.length ? item.code : 0,
    stars: item.stars
}))
  return (
    <section className='section'>
      <Swiper
        id='rb'
        title='بسته های پذیرایی'
        backColor={isDesktop ? '#F5FAFF' : '#F2F9FF'}
        headColor={isDesktop ? '#E6F3FF' : null}
        items={items}
        img='/img/reception-boxes.png'
        slug='reception-boxes'
      /> 
      <ReceptionBoxesMobile items={items} />
    </section>
  );
}
