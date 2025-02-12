import { useAuthenticator } from '@aws-amplify/ui-react'
import style from './Header.module.css'

export const Header = () => {
  const { user, signOut } = useAuthenticator()
  const firstLetterOfName = () => {
    const username = user?.signInDetails?.loginId
    return username ? username.charAt(0) : ''
  }

  return (
    <div className={style.headerContainer}>
      <h2 className={style.headerTitle}>goipsum</h2>
      <div className={style.nameButtonBlock}>
        <div className={style.avatarNameBlock}>
          <div className={style.avatar}>{firstLetterOfName()}</div> {user?.signInDetails?.loginId}
        </div>
        <button className={style.signOutButton} onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
