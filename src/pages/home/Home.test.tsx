import { beforeEach, describe, expect, it, vi, Mock } from 'vitest';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
//import * as reactRedux from 'react-redux'
import { addPodcasts, setLoading } from '@/redux/states';
//import { getPodcasts } from '@/services';
//import { podcastAdapter } from '@/adapters';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from './Home';

// const useSelectorMock = vi.fn();
// const useDispatchMock = vi.fn();

// vi.mock('react-redux', async () => {
//   const reduxActual = await vi.importActual('react-redux')
//   return {
//     reduxActual,
//     useDispatch: () => useSelectorMock,
//     useSelector: () => useDispatchMock,
//   }
// });

// vi.mock('@/services', () => ({
//   getPodcasts: vi.fn(),
// }));

// vi.mock('@/adapters', () => ({
//   podcastAdapter: vi.fn(),
// }));

describe('Home', () => {
  const mockStore = configureStore([]);

  //const useSelectorMock = vi.spyOn(reactRedux, 'useSelector')
  //const useDispatchMock = vi.spyOn(reactRedux, 'useDispatch')

  const mockPodcasts = [
    { id: 1, title: 'podcast 1', category: 'category 1', summary: 'summary 1', artist: 'artist 1', img: 'img 1' },
    { id: 2, title: 'podcast 2', category: 'category 2', summary: 'summary 2', artist: 'artist 2', img: 'img 2' },
  ];

  const store = mockStore({
    podcasts: {
      podcastsList: mockPodcasts,
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    render(
      <Provider store={store}>
        <Home />
      </Provider>)
  });

  it('renders home page correctly', async () => {
    //const mockDispatch = vi.fn();
    //(useDispatch as Mock).mockReturnValue(mockDispatch);

    //(useSelector as Mock).mockReturnValue(false);

    //(getPodcasts as Mock).mockReturnValue(mockDispatch);

    //(podcastAdapter as Mock).mockReturnValue(mockDispatch);

    const searchInput = screen.getAllByPlaceholderText('Filter podcasts...');
    const cards = screen.getAllByAltText('podcast');

    expect(searchInput[0]).toBeDefined();
    expect(cards.length).toBe(2);
    expect(screen.getByText('podcast 1')).toBeDefined();
    expect(screen.getByText('podcast 2')).toBeDefined();

    // await waitFor(() => {
    //   expect(mockDispatch).toHaveBeenCalledTimes(2);
    //   expect(mockDispatch).toHaveBeenCalledWith(addPodcasts(mockPodcasts));
    //   expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
    // });
  });

  it('filters podcasts based on search input', () => {
    // const mockDispatch = vi.fn();
    // (useDispatch as Mock).mockReturnValue(mockDispatch);

    // (useSelector as Mock).mockReturnValue(false);

    //(getPodcasts as Mock).mockReturnValue(mockDispatch);

    //(podcastAdapter as Mock).mockReturnValue(mockDispatch);

    const searchInput = screen.getAllByPlaceholderText('Filter podcasts...');
    fireEvent.change(searchInput[0], { target: { value: 'podcast 1' } });

    const cards = screen.getAllByAltText('podcast');

    expect(cards.length).toBe(1);
    expect(screen.getByText('podcast 1')).toBeDefined();
    expect(screen.getByText('artist 1')).toBeDefined();
  });
});