import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchBar } from '~/components';

describe('SearchBar Component', () => {
  const newValue = 'New value';
  const onChangeText = jest.fn();
  const onChangeType = jest.fn();

  it('should be changed value correctly', () => {
    const { getByTestId } = render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );
    const foundInput = getByTestId('search-input');

    fireEvent(foundInput, 'focus');
    fireEvent.changeText(foundInput, newValue);

    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });

  it('should be changed type correctly', () => {
    const { getByTestId } = render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );
    const foundFilterButton = getByTestId('filter-button');

    fireEvent.press(foundFilterButton);

    expect(onChangeType).toHaveBeenCalledWith('filter');
  });

  it('should be rendered type search correctly', async () => {
    const { getByTestId, queryByTestId } = render(
      <SearchBar
        type="search"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );

    const foundSearchInput = getByTestId('search-input');
    const foundFilterButton = getByTestId('filter-button');
    const foundSearchButton = queryByTestId('search-button');
    const foundFilterList = queryByTestId('filter-list');

    expect(foundSearchInput.props.placeholder).toMatch('Buscar');

    expect(foundSearchInput).toBeTruthy();
    expect(foundFilterButton).toBeTruthy();
    expect(foundSearchButton).toBeNull();
    expect(foundFilterList).toBeNull();
  });

  it('should be rendered type filter correctly', async () => {
    const { getByTestId, queryByTestId } = render(
      <SearchBar
        type="filter"
        onChangeText={onChangeText}
        onChangeType={onChangeType}
        value=""
      />,
    );

    const foundSearchInput = getByTestId('search-input');
    const foundFilterButton = queryByTestId('filter-button');
    const foundSearchButton = getByTestId('search-button');
    const foundFilterList = getByTestId('filter-list');

    expect(foundSearchInput.props.placeholder).toMatch('Filtrar');

    expect(foundSearchInput).toBeTruthy();
    expect(foundFilterButton).toBeNull();
    expect(foundSearchButton).toBeTruthy();
    expect(foundFilterList).toBeTruthy();
  });
});
