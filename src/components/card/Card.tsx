import { FC } from 'react';
import styles from './Card.module.scss';
interface cardInterface {
  title: string;
  artist: string;
  img: string;
}

const Card:FC<cardInterface> = ({ title, artist, img}) => {
  return (
    <div className={styles.cardMain}>
      <img src={img} alt='Img podcast'/>
      <h1>{title}</h1>
      <p>{artist}</p>
    </div>
  )
}

export default Card;