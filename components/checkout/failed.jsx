import Container from "../ui/container";
import ProgressBar from "./progress-bar";
import FailedIcon from "../icons/failed-icon";
import Button from "../ui/button";
import ArrowLeft from "../icons/arrow-left-white-icon";
import styles from "@/styles/components/failed-page.module.scss";

export default function Failed() {
	return (
		<section className={styles.section}>
			<div style={{ maxWidth: "70rem", margin: "0 auto" }}>
				<ProgressBar step={3} />
				<div style={{ transform: "translateY(-.8rem)" }}>
					<Container title="وضعیت خرید">
						<div className={styles.header}>
							<h1>پرداخت ناموفق</h1>
							<h2>
								<FailedIcon />
								<span>پرداخت ناموفق بود</span>
							</h2>
							<h3>سفارش ثبت شد اما پرداخت نا موفق بود</h3>
						</div>
						<div className={styles.body}>
							<div className={styles.table} style={{ flex: ".9" }}>
								<div className={styles.table_header}>
									<span className={styles.label}>پرداخت آنلاین</span>
								</div>
								<div
									className={styles.table_body}
									style={{ borderBottom: "none" }}
								>
									<p className={styles.label}>درگاه تست</p>
								</div>
							</div>

							<div className={styles.table}>
								<div className={styles.table_header}>
									<div>
										<span className={styles.label}>کد سفارش:</span>
										<span className={styles.value}>DEL-123456</span>
									</div>
								</div>
								<div className={styles.table_body}>
									<p className={styles.label}>
										سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون{" "}
										<span> در انتظار پرداخت </span>
										است.
									</p>
								</div>
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
						</div>

						<div
							className={styles.action}
							style={{ textAlign: "center", paddingBottom: "3rem" }}
						>
							<Button variant="primary" rounded>
								پرداخت&nbsp;&nbsp;&nbsp;
								<ArrowLeft className={styles.action_icon} />
							</Button>
						</div>
					</Container>
				</div>
			</div>
		</section>
	);
}
