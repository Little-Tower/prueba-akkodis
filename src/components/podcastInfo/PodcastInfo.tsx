import { FC, useEffect, useState } from 'react';
import { AppStore } from '@/redux/store';
import styles from './PodcastInfo.module.scss';
import { useSelector } from 'react-redux';
import { Podcast } from '@/models';

interface podcastInfoInterface {
  podcastId: string | any;
}

const PodcastInfo: FC<podcastInfoInterface> = ({ podcastId }) => {
  const [data, setData] = useState<Podcast>();
  const podcastsList = useSelector((store: AppStore) => store.podcasts.podcastsList);

  useEffect(() => {
    if (podcastsList) {
      const result = podcastsList.filter((e: Podcast) => {
        if (e.id === parseInt(podcastId)) return e;
      });
      setData(result[0]);
    }

  }, []);

  return (
    <div className={styles.podcastInfoMain}>
      {data ?
        <>
          <img src={data.img} alt='Img podcast'/>
          <hr />
          <h3>{data.title}</h3>
          <p>by. {data.artist}</p>
          <hr />
          <h4>Description</h4>
          <p>{data.summary}</p>
        </>
        :
        <p>No data</p>
      }
    </div>
  )
}

export default PodcastInfo;