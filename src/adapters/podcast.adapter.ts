import { Podcast } from "@/models";

export const podcastSchema = (data: any): Podcast => {
    return {
        title: data.title.label,
        category: data.category.attributes.label,
        summary: data.summary.label,
        id: parseInt(data.id.attributes["im:id"]),
        artist: data["im:artist"].label,
        img: data["im:image"][2].label
    }
}

export const podcastAdapter = (result: any): Podcast[] => {
    let podcastAdapted: Podcast[] = []
    
    result.data.feed.entry.forEach((e: any) => {
        podcastAdapted = [...podcastAdapted, podcastSchema(e)]
    });

    return podcastAdapted;
}