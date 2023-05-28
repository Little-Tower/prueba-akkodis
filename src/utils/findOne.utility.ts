import { EpisodeStore, Podcast } from '@/models';

export const findOnePodcast = (podcastId: string, podcastsList: Podcast[]): Podcast => {
    const podcastFiltered = podcastsList.filter((e: Podcast) => {
        if (e.id === parseInt(podcastId)) return e
    })[0];

    return podcastFiltered;
}

export const findEpisodes = (podcastId: string, episodeStore: EpisodeStore[]) : any => {
    const filteredEpisodes = episodeStore.filter((e: EpisodeStore) => {
        if (e.id === parseInt(podcastId)) return e.episodes
    })[0].episodes;

    return filteredEpisodes;
}
