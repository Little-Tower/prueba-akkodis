import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPodcasts, setLoading, setUpdateDate } from '@/redux/states';
import { getPodcasts } from '@/services';
import { Card, SearchBar } from '@/components';
import useFetchAndLoad from '@/hooks/useFetchLoad';
import { podcastAdapter } from '@/adapters';
import { Podcast } from '@/models';
import { AppStore } from '@/redux/store';
import { Link } from 'react-router-dom';
import { calculateTime } from '@/utils';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { callEndpoint, loading } = useFetchAndLoad();
  const [data, setData] = useState<Podcast[]>();
  const [filteredData, setfilteredData] = useState<Podcast[]>();

  const dateLastUpdate = useSelector((store: AppStore) => store.podcasts.updateDate);
  const podcastsList = useSelector((store: AppStore) => store.podcasts.podcastsList);

  const currentDate: Date = new Date();

  const getPodcastData = async () => {
    const lastDate: Date = new Date(dateLastUpdate)

    if (podcastsList.length !== 0 || calculateTime(lastDate, currentDate) > 1) {
      setData(podcastsList);
      setfilteredData(podcastsList);
    } else {
      try {
        const result = await callEndpoint(getPodcasts());
        const dataReady: Podcast[] = podcastAdapter(result);
        setData(dataReady);
        setfilteredData(podcastsList);
        dispatch(addPodcasts(dataReady));
        dispatch(setUpdateDate(currentDate.toString()))
      } catch (err: any) {
        throw err;
      }
    }
  }

  useEffect(() => {
    getPodcastData();
  }, []);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  const handlerRender = () => {
    if (!filteredData) {
      return (<p>No data</p>)
    }

    if (data) {
      return (
        <>
          <SearchBar items={data} setfilteredData={setfilteredData} filteredLength={filteredData.length} />
          <div className={styles.cardsWrapper}>
            {
              filteredData.map((e: Podcast) => (
                <Link to={"podcast/" + e.id} style={{ textDecoration: 'none' }}>
                  <Card title={e.title} artist={e.artist} img={e.img} key={e.id} />
                </Link>
              ))
            }
          </div>
        </>
      )
    }

  }

  return (
    <div className={styles.homeMain}>
      {handlerRender()}
    </div>
  )
}

export default Home;