import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPodcasts, setLoading } from '@/redux/states';
import { getPodcasts } from '@/services';
import { Card, SearchBar } from '@/components';
import useFetchAndLoad from '@/hooks/useFetchLoad';
import { podcastAdapter } from '@/adapters';
import { Podcast } from '@/models';
import { AppStore } from '@/redux/store';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { callEndpoint, loading } = useFetchAndLoad();
  const data = useSelector((store: AppStore) => store.podcasts.podcastsList);

  const [filteredData, setfilteredData] = useState<Podcast[]>(data);

  const getPodcastData = async () => {
    try {
      const result = await callEndpoint(getPodcasts());
      const dataReady: Podcast[] = podcastAdapter(result);
      dispatch(addPodcasts(dataReady))

    } catch (err: any) {
      throw err;
    }
  }
  useEffect(() => {
    getPodcastData();
  }, []);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  const handlerRenderCards = () => {
    if (!filteredData) {
      return (<p>No data</p>)
    }

    return (
      <>{
        filteredData.map((e: Podcast) => (
          <Link to={"podcast/"+ e.id} style={{ textDecoration: 'none' }}>
            <Card title={e.title} artist={e.artist} img={e.img} key={e.id} />
          </Link>
        ))
      }</>
    )
  }

  return (
    <div className={styles.homeMain}>
      <SearchBar items={data} setfilteredData={setfilteredData} filteredLength={filteredData.length} />
      <div className={styles.cardsWrapper}>
        {handlerRenderCards()}
      </div>
    </div>
  )
}

export default Home;