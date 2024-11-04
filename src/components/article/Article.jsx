import styles from './article.module.css'


export default function Article(props) {

    return (
    <div className={styles.articleWrapper}>
      <img src={props.article.imageURL} alt="cover-img" />
      <h3> {props.article.title}</h3>
      <p>  {props.article.readingTime}:مدت زمان مطالعه به دقیقه</p>
    </div>
  );
}
