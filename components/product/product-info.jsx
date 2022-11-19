import { useState } from "react";
import formatPrice from "@/helpers/formatPrice";
import ProductAmount from "./product-amount";
import StarOutlineIcon from "../icons/star-outline-icon";
import Button from "../ui/button";
import Tag from "../ui/tag";
import styles from "@/styles/components/product-info.module.scss";
import classNames from "classnames";

export default function ProductInfo({
	item,
	quantity,
	price,
	oldPrice,
	Weigh,
	handleSelectWeight,
	handleClickPlus,
	handleClickMinus,
	handleClickAddToCart,
	handleSelectPackage,
	selected_package,
	DiscoutionCalculation
}) {
	// debugger;

	
	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<h2>{item.name}</h2>
				<div className={styles.rating_box}>
					{[1, 2, 3, 4, 5].map((i) => (
						<StarOutlineIcon
							key={i}
							className={classNames(styles.rating, [
								item.stars && i <= item.stars ? styles.active : null,
							])}
						/>
					))}
				</div>
			</div>
			<div className={styles.detail}>
				<div className={styles.attributes}>
					<div>
						<div className={styles.code_level}>
							<div>
								<label>کد محصول: &nbsp;</label>
								<span>{item.code}</span>
							</div>
							<div>
								<label>درجه محصول: &nbsp;</label>
								<span>درجه {item.quality}</span>
							</div>
						</div>
						<div className={styles.amount}>
							<label>بسته:</label>
							
							<div
								style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
							>
								{item.types[0].map((itm, index) => (
									<div className={styles.product_package} key={index}>
										<input
										
											type="radio"
											name="package"
											id={`package-${itm.name}`}
											value={itm.name}
											defaultValue={selected_package}
											onChange={handleSelectPackage}
										/>
										<label style={{padding:"1rem ",whiteSpace:'nowrap'}} htmlFor={`package-${itm.name}`}>{itm.name}</label>
									</div>
								))}
								{/* <ProductAmount
                  label='250'
                  handleChange={handleSelectWeight}
                  checked
                />
                <ProductAmount label='500' handleChange={handleSelectWeight} />
                <ProductAmount label='1000' handleChange={handleSelectWeight} /> */}
							</div>
						</div>
						<div className={styles.amount}>
							<label>مقدار به گرم:</label>
							<div
								style={{ margin:'0 1rem 0 0' ,display: "flex", alignItems: "center", justifyContent:'space-between', flexFlow:'row wrap' }}
							>
								{Object.keys(selected_package.package)
									.filter((k) => k !== "inventory")
									.map((prop) => (<>
										<ProductAmount
											key={prop}
											label={prop}
											handleChange={handleSelectWeight}
											checked={prop}
											Weigh={Weigh}
										/>
										{/* {prop + ''+ Weigh} */}
										</>
									))}
								{/* <ProductAmount
                  label='250'
                  handleChange={handleSelectWeight}
                  checked
                />
                <ProductAmount label='500' handleChange={handleSelectWeight} />
                <ProductAmount label='1000' handleChange={handleSelectWeight} /> */}
							</div>
						</div>
						<div className={styles.amount}>
							<label>تعداد</label>
							<div>
								<Button variant="plus" handleClick={handleClickPlus} />
								<span>{quantity}</span>
								<Button variant="minus" handleClick={handleClickMinus} />
							</div>
						</div>
						<div className={styles.price}>
							{oldPrice !== price && (
								<p className={styles.beforeOff}>
									{formatPrice(oldPrice)} <span>تومان</span>
								</p>
							)}
							<div>
								{item.amount > 0 && <><label>قیمت:</label>
								<del>
									{formatPrice(price)} <span>تومان</span>
								</del></>}
								<p>
									{formatPrice(DiscoutionCalculation(price))} <span>تومان</span>
								</p>
							</div>
						</div>

						<div className={styles.action}>
							<Button variant="addToCart" handleClick={handleClickAddToCart}>
								افزودن به سبد خرید
							</Button>
						</div>
					</div>

					<div>
						<h4>خواص:</h4>
						<ul className={styles.attributes_list}>
							{item.attributes.map((attr, index) => (
								<li key={index}>{attr}</li>
							))}
						</ul>
					</div>
				</div>

				{/* <div className={styles.action}>
          <Button variant='addToCart'>افزودن به سبد خرید</Button>
        </div> */}

				<div className={styles.description}>
					<label>درباره محصول: </label>
					<p>{item.Description}</p>
				</div>

				{/* <div className={styles.tags}>
					<label>تگ ها:</label>
					<div>
						<Tag text="بادام" />
						<Tag text="بادام هندی" />
						<Tag text="بادام درجه 1" />
						<Tag text="صادراتی" />
						<Tag text="شب یلدا" />
					</div>
				</div> */}
			</div>
		</section>
	);
}
