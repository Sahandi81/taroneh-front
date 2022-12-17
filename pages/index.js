import Layout from '@/components/layout/layout';
import Hero from '@/components/ui/hero';
import FeaturesList from '@/components/home/features/features-list';
import Category from '@/components/home/category/category';
import IncredibleOffers from '@/components/home/incredible-offers/incredible-offers-container';
import SpecialSale from '@/components/home/special-sale/special-sale';
import NewProducts from '@/components/home/new-products/new-products';
import ReceptionBoxes from '@/components/home/reception-boxes/reception-boxes';
import Faq from '@/components/home/faq/faq';
import Contact from '@/components/home/contact/contact';
import ServiceCaller from "@/helpers/serviceCall";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setCateg, setCredentials } from "@/features/auth/authSlice";
import { useEffect } from 'react';
// import { NEXT_URL } from '../config';
import { useGetUserDetailsQuery } from '@/app/services/apiSlice';

function Home({categories,incredibleOffers, specialSale, newProducts, catering}) {
  const dispatch = useDispatch();
  console.log(categories,incredibleOffers, specialSale, newProducts, catering)
	const { data: userDetails, isLoading } = useGetUserDetailsQuery();
  const user = useSelector(selectUser);
	useEffect(()=>{

		dispatch(setCateg(categories))
	},[])
  
  useEffect(()=>{
      if(userDetails?.user && user?.token){
        dispatch(setCredentials({...user, f_name: userDetails.user.f_name,
        l_name: userDetails.user.l_name}))
      }
  },[userDetails])
  // console.log(incredibleOffers,'increase')
  // console.log(
  //   specialSale, "specialsale",
  //   newProducts
  // )
  const fetchCarringProducts =[];
    catering.map(el=> fetchCarringProducts.push(el.product))
  return (
    <Layout title={'بازار آجیل و خشکبار طارونه'} hasHeader hasFooter hasDescription hasKeywords >
      <Hero />
      <FeaturesList />
      <Category categories={categories} />
      {incredibleOffers?.success && incredibleOffers.products.length > 0 && <IncredibleOffers offers={incredibleOffers}/>}
      {specialSale?.length > 0 ? <SpecialSale products={specialSale} />:null}
      <NewProducts products={newProducts} />
      {fetchCarringProducts.length > 0 ? <ReceptionBoxes products={fetchCarringProducts} />:null}
      <Faq />
      <Contact />
    </Layout>
  )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await ServiceCaller('api/categories');
    const categories =  res?.details?.data.length > 0?res?.details?.data:[];

    const incredibleOffers = await ServiceCaller('api/amazing_offer');

    const specialSale = await ServiceCaller('api/special_sales');

    const newProducts = await ServiceCaller('api/shop');

    const catering = await ServiceCaller('api/catering')
    
    // console.log()
     return { props: { categories,incredibleOffers:
       incredibleOffers, specialSale: specialSale?.list?.data
       , newProducts: newProducts?.data, catering: catering?.data } }
  
    // return { props: {categories:[],incredibleOffers: [], specialSale: [], newProducts: [], catering: [] } }
  }
export default Home;