import { Episode } from "@/models/Episode";

export const episodeSchema = (data: any): Episode => {
    return {
        title: data.trackName,
        id: data.trackId,
        releaseDate: data.releaseDate,
        duration: data.trackTimeMillis,
        description: data.description || '',
        episodeUrl: data.episodeUrl || ''
    }
}

export const podcastAdapter = (result: any): Episode[] => {
    let episodesAdapted: Episode[] = []

    result.results.shift();

    result.results.forEach((e: any) => {
        episodesAdapted = [...episodesAdapted, episodeSchema(e)]
    });

    return episodesAdapted;
}