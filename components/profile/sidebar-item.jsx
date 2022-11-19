import styles from '@/styles/components/profile.module.scss';

export default function SidebarItem({
  Icon,
  title,
  isActive,
  handleClick,
  otherCss
}) {
  return (
    <div
      className={`${styles.sidebar_item} ${isActive ? styles.active : ''} ${
        otherCss ? styles[otherCss] : ''
      }`}
      onClick={handleClick}
    >
      <Icon className={styles.icon} />
      <h3>{title}</h3>
    </div>
  );
}
