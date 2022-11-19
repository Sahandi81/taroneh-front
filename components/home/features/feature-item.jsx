import styles from '@/styles/components/features.module.scss';

export default function FeatureItem({title, Icon, desktop, mobile}) {

  let cName;
  if (desktop) {
    cName = `${styles.item} ${styles.item_desktop}`;
  }

  if (mobile) {
    cName = `${styles.item} ${styles.item_mobile}`;
  }

  return (
    <div className={cName}>
      <div className={styles.icon_container}>
        {<Icon  className={styles.icon}/>}
      </div>
      <h3>{title}</h3>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
    </div>
  )
}
