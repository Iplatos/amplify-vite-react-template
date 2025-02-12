import { CardComponent } from '../card/Card'
import { PostsTitle } from '../postTitle/PostsTitle'
import style from './mainPage.module.css'
export const MainPage = () => {
  return (
    <div className={style.mainPageBlock}>
      <PostsTitle h1="Join me backStage to gain unlimited acces to how I solve technical problems" />
      <div className={style.buttonBlock}>
        <button>Become a member</button>
        <h3 style={{ color: 'white' }}>For just 99$ </h3>
      </div>
      <div className={style.mainPageCardList}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  )
}
