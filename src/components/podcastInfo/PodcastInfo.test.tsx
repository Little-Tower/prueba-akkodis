import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest'
import PodcastInfo from './PodcastInfo';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('PodcastInfo', () => {
  const mockStore = configureStore([]);

  const mockPodcast = {
    podcastId: '1'
  };

  const mockPodcastExample = {
    id: 1,
    title: 'Test Podcast',
    artist: 'Test Artist',
    img: 'example.jpg',
    summary: 'Test summary',
  };

  const mockPodcastsList = [mockPodcastExample];

  const store = mockStore({
    podcasts: {
      podcastsList: mockPodcastsList,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <PodcastInfo {...mockPodcast} />);
      </Provider>
    )
  });

  it('renders podcast info correctly', () => {
    expect(screen.getByText(mockPodcastExample.title)).toBeDefined();
    expect(screen.getByText(`by. ${mockPodcastExample.artist}`)).toBeDefined();
    expect(screen.getByText(mockPodcastExample.summary)).toBeDefined();
    const imgElement = screen.getAllByAltText('Img podcast');
    expect(imgElement[0].hasAttribute('example.jpg'));
  });

  it('renders "No data" when podcast data is not available', () => {
    const { getByText } = render(
      <Provider store={store}>
        <PodcastInfo podcastId="2" />
      </Provider>
    );

    const noDataElement = getByText('No data');

    expect(noDataElement).toBeDefined();
  });
});