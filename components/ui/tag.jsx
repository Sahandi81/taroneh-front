import styles from '@/styles/components/tag.module.scss';

export default function Tag({text}) {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}
