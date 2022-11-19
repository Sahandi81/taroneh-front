import Image from "next/image";

import StarIcon from "../icons/star-icon";
import styles from "@/styles/components/product-relate.module.scss";
import imageLoader from "@/helpers/imageLoader";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductRelate({
	id,
	title,
	photos,
	stars,
	code,
	short_explanation,
}) {
	const router = useRouter()
	return (
		<div onClick={()=>router.push(`/products/${id}`)} className={styles.container}>
			<div className={styles.header}>
				<div>
					<div className={styles.rating}>
						<span>5 / {stars}</span>
						<StarIcon className={styles.icon} />
					</div>
					<Link href={`/products/${id}`} passHref>
						<h3 className={styles.title}>{title}</h3>
					</Link>
				</div>
				<div className={styles.img}>
					<Link href={`/products/${id}`} passHref>
						<Image
							loader={imageLoader}
							src={`/storage/${
								photos.length ? `${code}/${photos[0]}` : "logo.png"
							}`}
							alt={title}
							width={128}
							height={128}
							placeholder="blur"
							blurDataURL={`/storage/${
								photos.length ? `${code}/${photos[0]}` : "logo.png"
							}`}
						/>
					</Link>
				</div>
			</div>
			<div className={styles.content}>
				<h4>توضیحات کوتاه:</h4>
				<p>{short_explanation} </p>
			</div>
		</div>
	);
}
