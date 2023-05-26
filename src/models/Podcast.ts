export interface Podcast {
    title: string,
    category: string,
    summary: string,
    id: number,
    artist: string,
    img: string
}

export const PodcastEmpty = {
    title: '',
    category: '',
    summary: '',
    id: 0,
    artist: '',
    imgs: ''
}
