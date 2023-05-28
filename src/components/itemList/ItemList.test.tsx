import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest'
import ItemList from './ItemList';

describe('ItemList', () => {
  const mockItem = {
    title: 'Test title',
    date: '2023-05-26T10:30:00Z',
    duration: 120000,
  };

  beforeEach(() => {
    render(<ItemList {...mockItem} />);
  });

  it('renders itemList data correctly', () => {
    expect(screen.getByText(/Test title/i)).toBeDefined();
    expect(screen.getByText('26/05/2023')).toBeDefined();
    expect(screen.getByText(/02:00/i)).toBeDefined();
  });
});