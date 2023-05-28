import { EpisodeStore } from '@/models';

export const calculateTime = (start: Date, end: Date): number => {
    var diff =(start.getTime() - end.getTime()) / 1000;
    diff /= 86400;
    return Math.abs(Math.round(diff));
}


export const checkUpdate = async (currentDate: Date, podcastId: number, episodeStore: EpisodeStore[]): Promise<boolean> => {
    let response: boolean = true;

    if (episodeStore) {
        episodeStore.map((e: EpisodeStore) => {
            const dateToCheck = new Date(e.dateUpdate);
            
            const timeDiference = calculateTime(dateToCheck, currentDate);
            if (e.id === podcastId && timeDiference > 1) {
                response = false;
            }
        });

        const existingCheck: boolean = episodeStore.some((e:EpisodeStore) => e.id === podcastId);
        if (!existingCheck){
            response = false;
        }
    }

    return response;
}