import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('SearchBar', () => {
    const mockStore = configureStore([]);

    const mockItems = [
        { id: 1, title: 'podcast 1', category: 'category 1', summary: 'summary 1', artist: 'artist 1', img: 'img 1' },
        { id: 2, title: 'podcast 2', category: 'category 2', summary: 'summary 2', artist: 'artist 2', img: 'img 2' },
    ];

    const store = mockStore({
        podcasts: {
            podcastsList: mockItems,
        },
    });

    const mockSetFilteredData = vi.fn();
    const mockFilteredLength = 2;

    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchBar
                    items={mockItems}
                    setfilteredData={mockSetFilteredData}
                    filteredLength={mockFilteredLength}
                />
            </Provider>

        );
    });

    it('renders search bar correctly', () => {
        expect(screen.getByText('2')).toBeDefined();
        expect(screen.getByPlaceholderText('Filter podcasts...')).toBeDefined();
    });

    it('calls setfilteredData with filtered items', () => {
        const inputElement = screen.getAllByPlaceholderText('Filter podcasts...');
        fireEvent.change(inputElement[0], { target: { value: 'podcast 1' } });

        expect(mockSetFilteredData).toBeCalled();
    });
});