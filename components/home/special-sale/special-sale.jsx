import useViewport from '@/helpers/useViewport';
import SpecialSaleMobile from './special-sale-mobile';
import Swiper from '@/components/swiper/swiper';
import DATA from '@/data/data';

export default function SpecialSale({products}) {
  const { isDesktop } = useViewport();

  const items = products.map(item => ({
     id: item.product_info._id,
      name: item.product_info.title,
      slug: item.product_info._id,
      price: item.product_info.amount,
      percent: item.product_info.amount,
      img: item.product_info.photos.length ? item.product_info.photos[0] : 'logo.png',
      images: item.product_info.photos,
      types: item.product_info.types,
      product_code: item.product_info.photos.length ? item.product_info.code : 0,
      stars: item.stars
  }))
  return (
    <section className='section'>
      <Swiper 
        id='ss'
        title='فروش ویژه'
        backColor={isDesktop ? '#fff' : '#FBF9F7'} 
        headColor={isDesktop ? '#FCEEEE' : null}
        items={items}
        img='/img/special-sale.jpg'
        slug='special-sale'
      />

      <SpecialSaleMobile products={items}/>
    </section>
  )
}