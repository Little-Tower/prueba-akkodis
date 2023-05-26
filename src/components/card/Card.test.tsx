import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest'
import Card from './Card';

describe('Card component', () => {
  const mockCard = {
    title: 'Example title',
    artist: 'Example artist',
    img: 'example.jpg'
  };

  beforeEach(() => {
    render(<Card {...mockCard} />);
  });

  it('displays the correct title', () => {
    const titleElement = screen.getByText('Example title');
    expect(titleElement).toBeDefined();
  });

  it('displays the correct artist', () => {
    const artistElement = screen.getAllByText('Example artist');
    expect(artistElement).toBeDefined();
  });

  it('renders the correct image', () => {
    //as HTMLElement[]
    const imgElement = screen.getAllByAltText('Img podcast');
    expect(imgElement[0].hasAttribute('example.jpg'));
  });
});