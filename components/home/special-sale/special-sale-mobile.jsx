import SaleBox from '../../ui/sale-box-mobile'
import DATA from '@/data/data';
import img from '../../../public/img/special-sale.jpg';

export default function SpecialSaleMobile({products}) {

  return (
    <SaleBox
      headerColor='#FCEEEE'
      title='فروش ویژه'
      img={img}
      slug='special-sale'
      items={products}
    />
  );
}
