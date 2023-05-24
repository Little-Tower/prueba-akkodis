export const podcastUrl = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const fetchPodcast = async (url: string) => {
    return fetch(url).then(res => res.json());
}