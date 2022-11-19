import Link from "next/link";
import { useState } from "react";

import ProductBox from "../product/product-box";
import BarsIcon from "../icons/bars-icon";
import PercentIcon from "../icons/percent-icon";
import ThumbsIcon from "../icons/thumbs-icon";
// import NewWordIcon from "../icons/new-word-icon";
// import CheapIcon from "../icons/cheap-icon";
import BackIcon from "../icons/back-icon";

import styles from "@/styles/components/search-page.module.scss";
import router from "next/router";

export default function Search({ products }) {
	const [activeTab, setActiveTab] = useState(1);
	const [search, setSearch] = useState("");

	
	const handleClickTab = (tabNumber) => setActiveTab(tabNumber);

	const handleChangeSearch = (e) => {
		if(e.target.value !== "cetring" && e.target.value !== "special_sale")setSearch(e.target.value);
		router.push('search?q='+ e.target.value)
		
		// if(query.type){
		// 	router.push('products?type='+ queryTab)
		// }
	};
	//  console.log(products)
	return (
		<section className="section">
			<div className={styles.container}>
				<div className={styles.searchbar}>
					<div className={styles.searchbar_content}>
						<Link href="/" passHref>
							<a>
								<BackIcon />
							</a>
						</Link>
						<input
							type="text"
							placeholder="جستجو در"
							value={search}
							onChange={handleChangeSearch}
						/>
						{search?.length === 0 && (
							<img src="/img/taroneh-search.png" alt="Taroneh" />
						)}
					</div>
				</div>
				<div className={styles.tab_bar}>
					<p
						className={`${styles.tab} ${
							activeTab === 1 ? styles.active_tab : ""
						}`}
						onClick={() => {handleClickTab(1);
							handleChangeSearch({target:{value: search}})}}
					>
						<BarsIcon className={styles.icon} />
						{/* همه محصولات */}
					جدیدترین‌ها
					</p>
					<p
						className={`${styles.tab} ${
							activeTab === 2 ? styles.active_tab : ""
						}`}
						onClick={() => {handleClickTab(2);
							handleChangeSearch({target:{value:"cetring"}})
						}}
					>
						<PercentIcon className={styles.icon} />
						{/* پرفروشترین‌ها */}
						محصولات پذیرایی
					</p>
					<p
						className={`${styles.tab} ${
							activeTab === 3 ? styles.active_tab : ""
						}`}
						onClick={() => {handleClickTab(3);
							handleChangeSearch({target:{value:"special_sale"}})
						}}
					>
						<ThumbsIcon className={styles.icon} />
						{/* مرتبط‌ترین */}
						فروش ویژه
					</p>
					{/* <p
						className={`${styles.tab} ${
							activeTab === 4 ? styles.active_tab : ""
						}`}
						onClick={() => handleClickTab(4)}
					>
						<NewWordIcon className={styles.icon} />
						جدیدترین‌ها
					</p>
					<p
						className={`${styles.tab} ${
							activeTab === 5 ? styles.active_tab : ""
						}`}
						onClick={() => handleClickTab(5)}
					>
						<CheapIcon className={styles.icon} />
						ارزان‌ترین‌ها
					</p> */}
				</div>
				<div className={styles.result}>
					{products?.map((product, index) => (
						<ProductBox
							id={product._id}
							key={index}
							name={product.title}
							img={
								product.photos?.length > 0
									? `/storage/${product.code}/${product.photos[0]}`
									: "/storage/0/logo.png"
							}
							price={product.amount}
							types={product.types}
							stars={product.stars}
							percent="0"
						/>
					))}
					{products?.length === 0 &&<span>موردی یافت نشد</span>}
				</div>
			</div>
		</section>
	);
}
