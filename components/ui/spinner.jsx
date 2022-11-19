import styles from '@/styles/components/spinner.module.scss'
import classNames from 'classnames'

export default function Spinner({className}) {
  return (
    <div className={classNames(styles.container, [
      className
    ])}>
    </div>
  )
}
