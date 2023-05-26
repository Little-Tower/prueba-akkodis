export interface Episode {
  title: string,
  id: number,
  releaseDate: string,
  duration: number,
  description: string,
  episodeUrl: string
}

export const EpisodeEmpty = {
  title: '',
  id: 0,
  releaseDate: '',
  duration: 0,
  description: '',
  episodeUrl: ''
}