import { FC, useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { Podcast } from '@/models';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
interface searchBarInterface {
  items: Podcast[],
  setfilteredData: any,
  filteredLength: number
}

const SearchBar: FC<searchBarInterface> = ({ items, setfilteredData, filteredLength }) => {
  const [query, setQuery] = useState<string>('');
  const loading = useSelector((store: AppStore) => store.podcasts.loading)

  useEffect(() => {
    setfilteredData(filteredItems());
  }, [query, items])
  

  const filteredItems = () => {
    if (items) {
      return items.filter((item: Podcast) => {
        if (item.title.toLowerCase().includes(query.toLowerCase()) || item.artist.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    }
  };

  return (
    <div className={styles.searchBarMain}>
      <input disabled={loading} value={query} onChange={e => setQuery(e.target.value)} placeholder='Filter podcasts...' />
      <p>{filteredLength}</p>
    </div>
  )
}

export default SearchBar;