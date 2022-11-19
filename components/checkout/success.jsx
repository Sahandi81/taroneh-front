import Container from "../ui/container";
import ProgressBar from "./progress-bar";
import SuccessIcon from "../icons/success-icon";
import Button from "../ui/button";
import ArrowLeft from "../icons/arrow-left-white-icon";
import styles from "@/styles/components/success-page.module.scss";
import { useRouter } from "next/router";

export default function Success() {
	const { push } = useRouter();
	return (
		<section className={styles.section}>
			<div style={{ maxWidth: "70rem", margin: "0 auto" }}>
				<ProgressBar step={3} />
				<div style={{ transform: "translateY(-.8rem)" }}>
					<Container title="وضعیت خرید">
						<div className={styles.header}>
							<h1>پرداخت موفق</h1>
							<h2>
								<SuccessIcon />
								<span>پرداخت موفق بود</span>
							</h2>
							<h3>سفارش شما با موفقیت پرداخت شد</h3>
						</div>
						<div className={styles.table}>
							<div className={styles.table_header}>
								<div>
									{/* <span className={styles.label}>کد سفارش:</span> */}
									{/* <span className={styles.value}>DEL-123456</span> */}
								</div>
								<div>
									{/* <span className={styles.label}>شماره پیگیری:</span> */}
									{/* <span className={styles.value}>823772nsdk3yq8833y</span> */}
								</div>
							</div>
							{/* <div className={styles.table_body}>
                <p className={styles.label}>
                 سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون{' '}
                <span> از طریق این صفحه </span> 
                 روند ارسال سفارش خود را پیگیری کنید{' '} .
                </p>
              </div> */}
							{/* <div className={styles.table_footer}>
                <div>
                  <span className={styles.label}>نام تحویل گیرنده:</span>
                  <span className={styles.value}>علیرضا موسوی</span>
                </div>
                <div>
                  <span className={styles.label}>مبلغ پرداختی:</span>
                  <span className={styles.price}>500,000 تومان</span>
                </div>
              </div> */}
						</div>

						<div
							className={styles.action}
							style={{ textAlign: "center", paddingBottom: "3rem" }}
						>
							<Button
								variant="primary"
								rounded
								handleClick={() => {
									push("/");
								}}
							>
								بازگشت به صفحه اصلی&nbsp;&nbsp;&nbsp;
								<ArrowLeft className={styles.action_icon} />
							</Button>
						</div>
					</Container>
				</div>
			</div>
		</section>
	);
}
