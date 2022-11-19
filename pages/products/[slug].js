import Layout from '@/components/layout/layout';
import Product from '@/components/product/product';
import ServiceCaller from "@/helpers/serviceCall";
import { API_URL } from "@/config/index";

export default function ProductDetailPage({ product, relatedProducts }) {
  // console.log(product)
  return (
    <Layout hasHeader hasFooter>
      <Product product={product} relatedProducts={relatedProducts} />
    </Layout>
  )
}

export async function getServerSideProps({ params: { slug } }) {

  const product = await ServiceCaller(`api/shop/single_product?id=${slug}`)
  let relatedProducts = []
  if (product.sub_category) {
    const res = await ServiceCaller(`api/shop?s_category=${product.sub_category._id}`);
    relatedProducts = res.data;
    // title = `${res.category.name} | بازارچه خشکبار طارونه`;
  }
    
  return {
    props: {
      product: product,
      relatedProducts
    }
  }
}
