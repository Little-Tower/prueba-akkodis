import { Podcast } from '@/models';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export const findOnePodcast = (podcastId: any, podcastsList: any) => {
    const podcastFiltered = podcastsList.filter((e:Podcast) => {
        if (e.id === parseInt(podcastId)) return e
    });

    return podcastFiltered;
}
