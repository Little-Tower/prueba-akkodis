import { useEffect } from 'react';
import { getPodcast } from '@/services';
import { SearchBar, Card, PodcastInfo } from '@/components';
import styles from './Home.module.scss';
import useFetchAndLoad from '@/hooks/useFetchLoad';
import { podcastAdapter } from '@/adapters/podcast.adapter';

const Home = () => {
  const { callEndpoint, loading } = useFetchAndLoad();

  const getPodcastData = async () => {
    try {
      const result = await callEndpoint(getPodcast());
      console.log(podcastAdapter(result));
      
      
    } catch (err: any) {
      throw err;
    }
  }

  useEffect(() => {
    getPodcastData();
  }, [])
  


  return (
    <div className={styles.homeMain}>
      <SearchBar />
      <div className={styles.cardsWrapper}>
        <Card />
        <Card />
        <Card />
        <PodcastInfo />
        {loading ? <p>Loading</p> : <p>Done</p>}
      </div>

    </div>
  )
}

export default Home;