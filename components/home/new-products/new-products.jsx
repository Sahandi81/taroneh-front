import useViewport from '@/helpers/useViewport';
import Swiper from '../../swiper/swiper';
import DATA from '@/data/data';
import NewProdcutsMobile from './new-products-mobile';

export default function NewProducts({products}) {
  const { isDesktop } = useViewport();
    const items = products.slice(0,4).map(item => ({
        id: item._id,
        name: item.title,
        slug: item._id,
        price: 0,
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
        id='np'
        title='محصولات جدید' 
        backColor={isDesktop ? '#FBF9F7' : null}
        headColor={isDesktop ? '#FCEFE8' : null}
        items={items}
        img='/img/new-products.png'
        slug='new-products'
      />

      <NewProdcutsMobile products={items}/>
    </section>
  )
}