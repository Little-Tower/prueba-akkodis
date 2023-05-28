// import { beforeEach, describe, expect, it, vi, Mock } from 'vitest';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import Podcast from './Podcast';
// import useFetchAndLoad from '@/hooks/useFetchLoad';
// import { getUniquePodcast } from '@/services';
// import { setLoading, setEpisode } from '@/redux/states';
// import { convertToJSON } from '@/utils/convertToJSON.utility';
// import { episodesAdapted } from '@/adapters';
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// vi.mock('react-redux', () => ({
//   ...vi.importActual('react-redux'),
//   useDispatch: vi.fn(),
//   useSelector: vi.fn(),
// }));

// vi.mock('react-router-dom', () => ({
//   ...vi.importActual('react-router-dom'),
//   useParams: vi.fn(),
// }));

// vi.mock('@/hooks/useFetchLoad', () => vi.fn());

// vi.mock('@/services', () => ({
//   getUniquePodcast: vi.fn(),
// }));

// vi.mock('@/adapters', () => ({
//   episodesAdapted: vi.fn(),
// }));

// vi.mock('@/utils/convertToJSON.utility', () => ({
//   convertToJSON: vi.fn(),
// }));

// describe('Podcast', () => {
//   const mockStore = configureStore([]);

//   const mockEpisodes = [
//     { id: 1, title: 'episode 1', releaseDate: '26-05-2023', duration: 1000, description: 'description 1', episodeUrl: 'episodeUrl 1' },
//     { id: 2, title: 'episode 2', releaseDate: '26-05-2023', duration: 2000, description: 'description 2', episodeUrl: 'episodeUrl 2 '},
//   ];

//   const store = mockStore({
//     podcasts: {
//       podcastsList: mockEpisodes,
//     },
//   });

//   beforeEach(() => {
//     vi.clearAllMocks();
//     vi.resetAllMocks();
//     render(
//       <Provider store={store}>
//         <Podcast />
//       </Provider>)
//   });

//   it('renders podcast page correctly', async () => {
//     const mockDispatch = vi.fn();
//     (useDispatch as Mock).mockReturnValue(mockDispatch);

//     (useSelector as Mock).mockReturnValue(false);

//     (useParams as Mock).mockReturnValue({ podcastId: '1' });

//     const mockCallEndpoint = vi.fn();
//     const mockLoading = false;
//     (useFetchAndLoad as Mock).mockReturnValue({ callEndpoint: mockCallEndpoint, loading: mockLoading });

//     (getUniquePodcast as Mock).mockResolvedValue({ data: { contents: 'mockContents' } });

//     const mockDataJson = [{ id: 1, title: 'episode 1', releaseDate: '26-05-2023', duration: 1000, description: 'description 1', episodeUrl: 'episodeUrl 1' }];
//     (convertToJSON as Mock).mockReturnValue(mockDataJson);

//     (episodesAdapted as Mock).mockReturnValue(mockEpisodes);

//     const { getByText } = render(<Podcast />);
//     const podcastInfo = getByText('Podcast Info');
//     const episodes = getByText('Episodes:');

//     expect(podcastInfo).toBeDefined();
//     expect(episodes).toBeDefined();

//     await waitFor(() => {
//       expect(mockDispatch).toHaveBeenCalledTimes(2);
//       expect(mockDispatch).toHaveBeenCalledWith(setEpisode(mockEpisodes[0]));
//       expect(mockDispatch).toHaveBeenCalledWith(setLoading(mockLoading));
//     });
//   });

//   it('renders episodes correctly', () => {
//     const mockDispatch = vi.fn();
//     (useDispatch as Mock).mockReturnValue(mockDispatch);

//     (useSelector as Mock).mockReturnValue(false);

//     (useParams as Mock).mockReturnValue({ podcastId: '1' });

//     const mockCallEndpoint = vi.fn();
//     const mockLoading = false;
//     (useFetchAndLoad as Mock).mockReturnValue({ callEndpoint: mockCallEndpoint, loading: mockLoading });

//     (getUniquePodcast as Mock).mockResolvedValue({ data: { contents: 'mockContents' } });

//     const mockDataJson = [{ id: 1, title: 'episode 1', releaseDate: '26-05-2023', duration: 1000, description: 'description 1', episodeUrl: 'episodeUrl 1' }];
//     (convertToJSON as Mock).mockReturnValue(mockDataJson);

//     (episodesAdapted as Mock).mockReturnValue(mockEpisodes);

//     const { getByText } = render(<Podcast />);
//     const itemList = getByText('episode 1');

//     expect(itemList).toBeDefined();
//     expect(getByText('episodes: 2')).toBeDefined();

//     fireEvent.click(itemList);

//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//     expect(mockDispatch).toHaveBeenCalledWith(setEpisode(mockEpisodes[0]));
//   });
// });