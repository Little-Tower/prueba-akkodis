import { FC } from 'react';
import styles from './ItemList.module.scss';
interface itemListInterface {
  title: string;
  date: string;
  duration: number;
}

const ItemList: FC<itemListInterface> = ({ title, date, duration }) => {
  const utcDate = new Date(date);
  const localDate = utcDate.toLocaleString("es-ES", {
    dateStyle: "short",
  });
  const finalData = localDate.toString()

  const millisDate = new Date(1000 * Math.round(duration / 1000));
  const durationFormater = (i: number) => { return ('0' + i).slice(-2); }
  const finalDuration = durationFormater(millisDate.getUTCMinutes()) + ':' + durationFormater(millisDate.getUTCSeconds());

 
  return (
    <div className={styles.itemListMain}>
      <p>{title}</p>
      <p>{finalData}</p>
      <p>{finalDuration}</p>
    </div>
  )
}

export default ItemList;