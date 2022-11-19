import styles from '@/styles/components/container.module.scss';

export default function Container({ title, ButtonHeader, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {ButtonHeader}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
