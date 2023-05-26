import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest'
import { useSelector } from 'react-redux';
import Header from './Header';

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: vi.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('renders the correctly', () => {
    (useSelector as Mock).mockReturnValue(false);
    expect(screen.getByText('Podcaster')).toBeDefined();
  });

  // it('displays loading spinner when loading is true', () => {
  //   (useSelector as Mock).mockReturnValue(true);
  //   expect(screen.getByAltText('Loading spinner')).toBeDefined();
  // });

  it('does not display loading spinner when loading is false', () => {
    (useSelector as Mock).mockReturnValue(false);
    expect(screen.queryByAltText('Loading spinner')).toBeNull();
  });
});