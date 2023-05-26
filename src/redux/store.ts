import { Episode, Podcast } from '@/models'
import { configureStore } from '@reduxjs/toolkit';
import { podcastsSlicer, episodeSlicer } from './states';

export interface AppStore {
    //Any is bad but used to don't produce a Typescript error.
    podcasts:  {podcastsList: Podcast[]; loading: boolean; updateDate: number} | any;
    episode: {episodeSelect: Episode} | any;
}

export default configureStore<AppStore>({
    reducer: {
        podcasts: podcastsSlicer.reducer,
        episode: episodeSlicer.reducer
    }
});