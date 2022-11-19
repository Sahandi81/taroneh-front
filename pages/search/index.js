import Layout from '@/components/layout/layout';
import Search from '@/components/search/search';
import ServiceCaller from '@/helpers/serviceCall';

export default function SearchPage({ search, searchResult }) {

  let title;
  if (search) {
    title = `جستجو برای ${search} | بازارچه خشکبار طارونه`;
  } else {
    title = `جستجو | بازارچه خشکبار طارونه`;
  }

  return (
    <Layout hasHeader hasFooter title={title}>
      <Search products={searchResult} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { q } }) {
  if (q) {

    let searchResult;

    if(q === "special_sale"){
      const fetchdt =await ServiceCaller('api/special_sales');
     searchResult =  searchResult =  [];
     fetchdt.list.data.map(el=>{el?searchResult.push({...el, ...el.product_info}):null})
    }else if(q === "cetring"){
      const fetchdt = await ServiceCaller('api/catering');
      searchResult =  [];
      fetchdt.data.map(el=>el.product?searchResult.push({...el, ...el.product}):null)
    }else{
      const fetchdt = await ServiceCaller(`api/search?q=${q}`);
       searchResult = fetchdt.success? fetchdt.products.data : [];
    }


    // console.log(searchResult, 'qqq')
    if (q.sub_category) {
      const res = await ServiceCaller(`api/shop?s_category=${product.sub_category._id}`);
      relatedProducts = res.data;
      // title = `${res.category.name} | بازارچه خشکبار طارونه`;
    }
    return {
      props: {
        search: q,
        searchResult: searchResult
      }
    };
  }

  return {
    props: {}
  };
}
