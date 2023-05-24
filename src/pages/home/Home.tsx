import { fetchPodcast, podcastUrl } from '@/services';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [podcastsData, setpodcastsData] = useState();

  const getPodcasts = async () => {
    const result = await fetchPodcast(podcastUrl);
    setpodcastsData(result.feed.entry);
  }

  useEffect(() => {
    getPodcasts();
  }, []);


  return (
    <div>Home</div>
  )
}

export default Home;