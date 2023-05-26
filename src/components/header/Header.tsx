import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadingIcon from '@/assets/loading-icon.svg'
import styles from './Header.module.scss';

const Header = () => {

  const loading = useSelector((store: AppStore) => store.podcasts.loading)
  return (
    <div className={styles.headerMain}>
      <Link to={"/"}>
        <p>Podcaster</p>
      </Link>

      {loading && <img src={loadingIcon} alt='Loading spinner'/>}
    </div>
  )
}

export default Header;