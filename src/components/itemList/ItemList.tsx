import { FC } from 'react';
import styles from './ItemList.module.scss';
interface itemListInterface {
  title: string;
  date: string;
  duration: number;
}

const ItemList: FC<itemListInterface> = ({ title, date, duration }) => {
  const dateRaw = new Date(date);
  const dateFomatter = (n: number) => {
    return n < 10 ? "0" + n : n;
  }
  const finalDate = dateFomatter(dateRaw.getDate()) + "/" + dateFomatter(dateRaw.getMonth() + 1) + "/" + dateRaw.getFullYear();

  const millisTime = new Date(1000 * Math.round(duration / 1000));
  const durationFormater = (i: number) => { return ('0' + i).slice(-2); }
  const finalDuration = durationFormater(millisTime.getUTCMinutes()) + ':' + durationFormater(millisTime.getUTCSeconds());


  return (
    <div className={styles.itemListMain}>
      <p>{title}</p>
      <p>{finalDate}</p>
      <p>{finalDuration}</p>
    </div>
  )
}

export default ItemList;