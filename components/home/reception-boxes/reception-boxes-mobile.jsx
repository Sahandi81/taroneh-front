import SaleBox from '../../ui/sale-box-mobile'
// import DATA from '@/data/data';
import img from '../../../public/img/reception-boxes.png';

export default function ReceptionBoxesMobile({items}) {
  // const { items } = DATA;
  return (
    <SaleBox
      headerColor='#E6F3FF'
      backColor='#F2F9FF'
      title='بسته های پذیرایی و ادارات'
      img={img}
      routePath='search'
      items={items}
    />
  );
}
