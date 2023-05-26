import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PodcastInfo } from '@/components';
import { useSelector } from 'react-redux';
import styles from './Episode.module.scss'
import { AppStore } from '@/redux/store';
import{ Episode as EpisodeModel}  from '@/models';

const Episode = () => {
  const { podcastId } = useParams();
  const [data, setData] = useState<EpisodeModel>()
  const episodeSelect = useSelector((store: AppStore) => store.episode.episodeSelect);

  useEffect(() => {
    if (episodeSelect) {
      setData(episodeSelect);
    }
  }, [])


  return (
    <div className={styles.episodeMain} >
      <PodcastInfo key={podcastId} podcastId={podcastId} />
      <div className={styles.player} >
        {data ?
          <>
            <h2>Description</h2>
            <p>{data.description}</p>
            <audio controls>
              <source src={data.episodeUrl} type="audio/mp3" />
            </audio>
          </>
          :
          <p>No data</p>
        }
      </div>
    </div>
  )
}

export default Episode