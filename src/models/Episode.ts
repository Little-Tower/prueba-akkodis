export interface Episode {
  title: string,
  id: number,
  releaseDate: string,
  duration: number,
  description: string,
  episodeUrl: string
}

export interface EpisodeStore {
  id: number,
  dateUpdate: string,
  episodes: Episode[]
}


export const EpisodeEmpty = {
  title: '',
  id: 0,
  releaseDate: '',
  duration: 0,
  description: '',
  episodeUrl: ''
}