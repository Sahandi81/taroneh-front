import Image from "next/image";
import styles from "@/styles/components/blog.module.scss";
import Link from "next/link";
import imageLoader from "@/helpers/imageLoader";

export default function Header({ data }) {
	return (
		<div className={styles.header}>
			{data.map((item) => (
				<Link href={`/blog/${item._id}`} passHref key={item._id}>
					<div>
						<div>
							{item && item.photo?.length > 0 &&<Image
								loader={imageLoader}
								src={`/storage/blog/${item.photo[0]}`}
								alt={item.title}
								width={700}
								height={550}
								layout="responsive"
								objectFit="cover"
							/>}
							
						</div>
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
