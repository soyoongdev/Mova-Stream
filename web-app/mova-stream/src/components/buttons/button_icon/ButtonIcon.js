import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonIcon({ icon, large, onClick, color, background, bordered }) {
  return (
    <button
      className={cx('button-icon', {
        large: large,
      })}
      onClick={onClick}
    >
      <FontAwesomeIcon className={cx('fa-button')} icon={icon} style={{ color: color }} />
    </button>
  )
}

export default ButtonIcon