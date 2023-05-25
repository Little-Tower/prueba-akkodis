import { Podcast } from "@/models";

export const podcastSchema = (data: any): Podcast => {
    return {
        title: data.title.label,
        category: data.category.attributes.label,
        summary: data.summary.label,
        id: data.id.attributes["im:id"],
        imgs: [data["im:image"]]
    }
}

export const podcastAdapter = (result: any): Podcast[] => {
    let podcastAdapted: Podcast[] = []
    
    result.data.feed.entry.forEach((e: any) => {
        podcastAdapted = [...podcastAdapted, podcastSchema(e)]
    });

    return podcastAdapted;
}