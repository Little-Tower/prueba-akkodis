import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetchAndLoad from '@/hooks/useFetchLoad';
import { getUniquePodcast } from '@/services';
import { ItemList, PodcastInfo } from '@/components';
import { useDispatch } from 'react-redux';
import { setLoading, setEpisode} from '@/redux/states';
import { convertToJSON } from '@/utils/convertToJSON.utility';
import { Episode } from '@/models/Episode';
import { episodesAdapted } from '@/adapters';
import styles from './Podcast.module.scss';

const Podcast = () => {
  const dispatch = useDispatch();
  const { podcastId } = useParams();
  const { callEndpoint, loading } = useFetchAndLoad();
  const [data, setData] = useState<Episode[]>()

  const getPodcastData = async () => {
    try {
      const result = await callEndpoint(getUniquePodcast(podcastId));
      const dataJson = convertToJSON(result.data.contents);
      setData(episodesAdapted(dataJson));      
    } catch (err: any) {
      throw err;
    }
  }

  const handlerRenderEpisode = () => {
    if (!data) {
      return (<p>Loading data...</p>);
    }

    return (
      <>
        {data.map((e: any) => (
          <Link to={"episode/" + e.id } style={{ textDecoration: 'none' }} onClick={() => {dispatch(setEpisode(e))}}>
            <ItemList title={e.title} date={e.releaseDate} duration={e.duration} key={e.id}/>
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
      <PodcastInfo podcastId={podcastId}/>
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

export default Podcast