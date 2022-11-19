import Image from "next/image";
import Search from "./search";
import ClockIcon from "../icons/clock-icon";
import styles from "@/styles/components/blog.module.scss";
import Link from "next/link";
// import jMoment from "jalali-moment";
import imageLoader from "@/helpers/imageLoader";
import { calender } from "@/data/calender";

export default function Main({ data }) {
	
	return (
		<div className={styles.main}>
			{/* <Search /> */}
			<h1>
				آخرین عنوان ها
				<span></span>
			</h1>
			<div className={styles.main_items}>
				{data.data.map((item) => (
					<Link href={`/blog/${item._id}`} passHref key={item._id}>
						<div>
							<div className={styles.main_item_image}>
								{item.photo?.length > 0 &&<Image
									loader={imageLoader}
									src={`/storage/${item.photo[0]}`}
									alt={item.title}
									width={515}
									height={342}
									layout="responsive"
								/>}
								
							</div>
							<div>
								<h3>{item.title}</h3>
								<p>
									<ClockIcon className={styles.clock} />
									{calender(item.created_at)
										}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
