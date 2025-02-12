import style from './Posts.module.css'
import { CardComponent } from './../card/Card'
import { PostsTitle } from '../postTitle/PostsTitle'

export const Posts = () => {
  return (
    <div className={style.postsBlock}>
      <PostsTitle
        h1="Welcome to our backstage"
        h3="Discover stories, thinking and expertise from writers"
      />

      <div className={style.cardList}>
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
