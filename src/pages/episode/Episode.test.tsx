import { beforeEach, describe, expect, it, vi, Mock } from 'vitest'
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Episode from './Episode';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useParams: vi.fn(),
}));

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: vi.fn(),
}));

describe('Episode', () => {
  const mockStore = configureStore([]);

  const mockEpisode = {
    id: 1,
    description: 'Test description',
    episodeUrl: 'test-audio.mp3',
  };

  const store = mockStore({
    podcasts: {
      podcastsList: mockEpisode,
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    (useParams as Mock).mockReturnValue({ podcastId: '1' });
    (useSelector as Mock).mockReturnValue({
      episode: { episodeSelect: mockEpisode },
    });
    render(
      <Provider store={store}>
        <Episode />
      </Provider>)
  });

  it('renders episode data correctly', () => {
    expect(screen.getByText(mockEpisode.description)).toBeDefined();
    expect(screen.getByRole('audio')).toBeDefined();
  });

  it('renders "No data" when episode data is not available', () => {
    (useSelector as Mock).mockReturnValue({
      episode: { episodeSelect: null },
    });
    expect(screen.getByText('No data')).toBeDefined();
  });
});