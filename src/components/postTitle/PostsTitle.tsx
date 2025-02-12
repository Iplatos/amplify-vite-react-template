import style from './PostTitle.module.css'

type PropsType = {
  h1: string
  h3?: string
}
export const PostsTitle = (props: PropsType) => {
  return (
    <div className={style.postsTitleBlock}>
      <h1 className={style.postsTopic}>{props.h1}</h1>
      {props.h3 && <h3 className={style.postsTopic}>{props.h3} </h3>}
    </div>
  )
}
