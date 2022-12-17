import { apiSlice, useGetWishListQuery } from "@/app/services/apiSlice";
// import ServiceCaller from "@/helpers/serviceCall";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./footer/footer";
import Header from "./header";
import { setCateg } from "@/features/auth/authSlice";

export default  function Layout({
	title,
	description,
	keywords,
	hasHeader,
	hasFooter,
	hasDescription,
	hasKeywords,
	children,
	categories
}) {
	// const { data, isLoading } = useGetWishListQuery();
	// const res = await ServiceCaller('api/categories');
    // const categorie =  res.details.data;
	// console.log(data)

	const dispatch = useDispatch();

	const categorie = useSelector(state=> state.auth.Categ);
	// console.log(categorie,'useeffect')
	useEffect(() => {
		dispatch(apiSlice.endpoints.getWishList.initiate());
	}, [dispatch]);
	// console.log(categories)
	return (
		<div>
			<Head>
				<title>{title}</title>
				{hasDescription && <meta name="description" content={description} />}
				{hasKeywords && <meta name="keywords" content={keywords} />}
			</Head>
			{categorie&&hasHeader && <Header categories={categorie}/>}
			<main>{children}</main>
			{hasFooter && <Footer />}
		</div>
	);
}

Layout.defaultProps = {
	title: "بازار آجیل و خشکبار طارونه",
	description: "بازار آجیل و خشکبار طارونه، از بازار تا خونه راهی نیست",
	keywords: "طارونه، بازارچه خشکبار، بازار آجیل و خشکبار طارونه، آجیل، خشکبار",

};
