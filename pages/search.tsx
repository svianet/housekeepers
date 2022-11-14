import { User } from '../lib'
import styles from '../components/dashboard.module.css'

interface Props {
  user: User
}

export const Search = ({ user }: Props) => {
  
  return (
    <>
      <div className={styles.user}>
        <div>
          <div className={styles.label}>Logged in as:</div>
          <div>{user.email}</div>
        </div>
      </div>
    </>
  )
}
