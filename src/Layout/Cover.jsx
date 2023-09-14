import coverImage from '../assets/cover.jpeg'
import styles from './Cover.module.css'

const Cover = () => {
  return (
    <div className={styles['main-image']}>
      <img src={coverImage} alt='A table full of deicious food'/>
    </div>
  );
}

export default Cover;
