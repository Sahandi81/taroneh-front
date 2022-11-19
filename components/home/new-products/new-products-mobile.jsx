import SaleBox from '../../ui/sale-box-mobile'
import DATA from '@/data/data';
import img from '../../../public/img/new-products.png';

export default function NewProdcutsMobile({products}) {

  return (
    <SaleBox
      headerColor='#FCEFE8'
      backColor='#FBF9F7'
      title='محصولات جدید طارونه'
      img={img}
      slug='new-products'
      items={products}
    />
  );
}
