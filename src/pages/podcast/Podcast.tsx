import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetchAndLoad from '@/hooks/useFetchLoad';
import { getUniquePodcast } from '@/services';
import { ItemList, PodcastInfo } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setEpisode, addEpisodeStore } from '@/redux/states';
import { convertToJSON, checkUpdate, findEpisodes } from '@/utils';
import { Episode } from '@/models/Episode';
import { episodesAdapted } from '@/adapters';
import { AppStore } from '@/redux/store';
import styles from './Podcast.module.scss';

const Podcast = () => {
  const dispatch = useDispatch();

  const { podcastId } = useParams<string>();
  const { callEndpoint, loading } = useFetchAndLoad();
  const episodeStore = useSelector((store: AppStore) => store.episode.epidodeStore);
  const [data, setData] = useState<Episode[]>();
  const currentDate: Date = new Date();

  const getPodcastData = async () => {
    if (podcastId !== undefined) {
      const checkUpdateResponse = await checkUpdate(currentDate, parseInt(podcastId), episodeStore);

      if (checkUpdateResponse) {
        const resultData = findEpisodes(podcastId, episodeStore);
        setData(resultData);

      } else {
        try {
          const result = await callEndpoint(getUniquePodcast(podcastId));
          const dataJson = convertToJSON(result.data.contents);
          const dataReady = episodesAdapted(dataJson)
          setData(dataReady);
          dispatch(addEpisodeStore({ id: parseInt(podcastId), dateUpdate: currentDate.toString(), episodes: dataReady }));

        } catch (err: any) {
          throw err;data
        }
      }


    }

  }

  const handlerRenderEpisode = () => {
    if (!data) {
      return (<p>Loading data...</p>);
    }

    return (
      <>
        {data.map((e: Episode) => (
          <Link to={"episode/" + e.id} style={{ textDecoration: 'none' }} onClick={() => { dispatch(setEpisode(e)) }}>
            <ItemList title={e.title} date={e.releaseDate} duration={e.duration} key={e.id} />
          </Link>
        ))}
      </>
    )
  }

  useEffect(() => {
    getPodcastData();
  }, []);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);


  return (
    <div className={styles.podcastMain}>
      <PodcastInfo podcastId={podcastId} />
      <div className={styles.epidodes}>
        <div className={styles.episodesCounter}>
          <p>Episodes:</p>{data && <span>{data.length}</span>}
        </div>

        <div className={styles.episodesWrapper}>
          <div className={styles.episodesHeader}>
            <p>Title</p>
            <p>Date</p>
            <p>Duration</p>
          </div>
          {handlerRenderEpisode()}
        </div>
      </div>
    </div>
  )
}

export default Podcast;