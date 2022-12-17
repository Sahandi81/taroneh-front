import Layout from '@/components/layout/layout';
// import Search from '@/components/search/search';
import styles from "@/styles/components/products.module.scss";
import Link from "next/link";
import BackIcon from "@/components/icons/back-icon";
import cn from 'classnames';

// import BarsIcon from "@/components/icons/bars-icon";
// import PercentIcon from "@/components/icons/percent-icon";
// import ThumbsIcon from "@/components/icons/thumbs-icon";
// import NewWordIcon from "@/components/icons/new-word-icon";
// import CheapIcon from "@/components/icons/cheap-icon";
import ProductBox from "@/components/product/product-box";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ServiceCaller from "@/helpers/serviceCall";
import Category from '@/components/home/category/category';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Products({ products, title, length, pg}) {

    const [activeTab, setActiveTab] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [lastPage, setLastPage] = useState(1);
    // console.log(pg)
    const { query } = useRouter()
    const path = window.location.search;
    useEffect(()=>{
        if(query.s_category){
        setPage(pg ? Number(pg):1)
        setLastPage(length?Math.ceil(length / 8):1)
    }
    },[])

    
    // console.log(length, query)
    // console.log(path.includes('page')?
    // path.replace(`page=${page}`, `page=${page + 1}`):path + '&page=' + (page + 1))
    const handleClickPrev = () => {
        setPage(prevState => {
          if (prevState > 1) return prevState - 1;
        });

        const query =path.includes('page')?
        path.replace(`page=${page}`, `page=${page - 1}`):`${path}&page=${page - 1}`
        // console.log()
        window.location.replace(window.location.pathname + query)
      
      };
    
      const handleClickNext = () => {
        setPage(prevState => {
          if (prevState < lastPage) return prevState + 1;
        });
        const query =path.includes('page')?
        path.replace(`page=${page}`, `page=${Number(page) + 1}`):`${path}&page=${Number(page) + 1}`
        // console.log()
        window.location.replace(window.location.pathname  + query)
      };

    
    // console.log(products,  query.category)
    const handleClickTab = (tabNumber, queryTab) =>{ 
        setActiveTab(tabNumber);
        
        if(query.type || query.type === ''){
        router.push('products?type='+ queryTab)
    }
}
    
    return (
        <Layout hasHeader hasFooter title={title}>
            <section className='section'>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <div className={styles.title_content}>
                            <Link href='/' passHref>
                                <a>
                                    <BackIcon />
                                </a>
                            </Link>
                            <p>
                                {title}
                            </p>
                        </div>
                    </div>
                    {/* <div className={styles.tab_bar}>
                        <p
                            className={`${styles.tab} ${activeTab === 1 ? styles.active_tab : ''
                                }`}
                            onClick={() => handleClickTab(1,"new-products")}
                        >
                            <BarsIcon className={styles.icon} />
                            همه محصولات
                        </p>
                        <p
                            className={`${styles.tab} ${activeTab === 2 ? styles.active_tab : ''
                                }`}
                            onClick={() => handleClickTab(2,"special-sale")}
                        >
                            <PercentIcon className={styles.icon} />
                            پرفروشترین‌ها
                        </p>
                        <p
                            className={`${styles.tab} ${activeTab === 3 ? styles.active_tab : ''
                                }`}
                            onClick={() => handleClickTab(3, "")}
                        >
                            <ThumbsIcon className={styles.icon} />
                            مرتبط‌ترین
                        </p>
                        <p
                            className={`${styles.tab} ${activeTab === 4 ? styles.active_tab : ''
                                }`}
                            onClick={() => handleClickTab(4,"new-products")}
                        >
                            <NewWordIcon className={styles.icon} />
                            جدیدترین‌ها
                        </p>
                        <p
                            className={`${styles.tab} ${activeTab === 5 ? styles.active_tab : ''
                                }`}
                            onClick={() => handleClickTab(5,"")}
                        >
                            <CheapIcon className={styles.icon} />
                            ارزان‌ترین‌ها
                        </p>
                    </div> */}
                    <div className={styles.result}>
                        {!query.category ?products.length > 0?
                            products.map((product, index) => {
                                
                                if (query.type && query.type === 'special-sale') {
                                    return <ProductBox
                                        id={product.product_info._id}
                                        key={index}
                                        name={product.product_info.title}
                                        img={product.product_info.photos.length ? `/storage/${product.product_info.code}/${product.product_info.photos[0]}` : '/storage/0/logo.png'}
                                        price={product.product_info.amount}
                                        types={null}
                                        percent='0'
                                    />
                                } else {
                                    return <ProductBox
                                        id={product._id}
                                        key={index}
                                        name={product.title}
                                        img={product.photos.length ? `/storage/${product.code}/${product.photos[0]}` : '/storage/0/logo.png'}
                                        price={product.amount}
                                        types={product.types}
                                        percent='0'
                                    />
                                }
                            }

                            ):<span style={{color:"gray", fontSize:'1rem'}}>
                                موردی یافت نشد
                            </span>
                        :<Category categories={products}></Category>}
                    </div>
                </div>
               {length !== 'none'? <div style={{justifyContent:'flex-end'}} className='flex  mr-auto w-fit mt-5 h-11 rounded border'>
                        <button
                        type='button'
                        onClick={handleClickPrev}
                        className={cn('w-11 flex justify-center items-center border-l bg-white', {
                            ['text-gray-700']: page !== 1,
                            ['text-gray-300']: page === 1,
                            ['hover:bg-gray-100']: page !== 1,
                            ['active:bg-transparent']: page !== 1
                        })}
                        disabled={page <= 1}
                        >
                            {'قبلی'}
                        {/* <FaChevronRight /> */}
                        </button>
                        <button
                        type='button'
                        onClick={handleClickNext}
                        className={cn('w-11 flex justify-center items-center bg-white', {
                            ['text-gray-700']: page !== lastPage,
                            ['text-gray-300']: page === lastPage,
                            ['hover:bg-gray-100']: page !== lastPage,
                            ['active:bg-transparent']: page !== lastPage
                        })}
                        disabled={page === lastPage}
                        >
                            {'بعدی'}
                        {/* <FaChevronLeft /> */}
                        </button>
                </div>:null}
            </section>
        </Layout>
    );
}

export async function getServerSideProps({ query }) {

    const { type, category, s_category ,page} = query;
    let products = []
    let title = 'بازار آجیل و خشکبار طارونه';
    let length = 'none';
    if (type) {
        switch (type) {
            case "special-sale": {
                const res = await ServiceCaller('api/special_sales');
                products = res.list.data;

                title = `فروش ویژه | بازار آجیل و خشکبار طارونه`;
                break;
            }
            case "new-products": {
                const res = await ServiceCaller('api/shop');
                products = res.data;
                title = `جدیدترین محصولات | بازار آجیل و خشکبار طارونه`;
                break;
            }
        }
    }

    if (category) {
        const res = await ServiceCaller(`api/categories?q=${category}`);
        products =res.details.sub_category;
        // console.log(res)
        title = `${res.details.name} | بازار آجیل و خشکبار طارونه`;
    }
    if (s_category) {
        const res = await ServiceCaller(`api/shop?s_category=${s_category}&page=${page?page: 1}&per_page=8`);
        products = res.data;
        // title = `${res.category.name} | بازار آجیل و خشکبار طارونه`;
        length = res.total

    }
        
    return {
        props: { products, title, length , pg: page?page:null }
    };
}
