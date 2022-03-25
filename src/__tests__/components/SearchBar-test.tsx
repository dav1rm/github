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
    const foundInput = getByTestId('searchInput');

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
    const foundFilterButton = getByTestId('filterButton');

    fireEvent.press(foundFilterButton);

    expect(onChangeType).toHaveBeenCalledWith('filter');

    // const foundSearchInput = getByTestId('searchInput');
    // expect(foundFilterButton).toBeFalsy();
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

    const foundSearchInput = getByTestId('searchInput');
    const foundFilterButton = getByTestId('filterButton');
    const foundSearchButton = queryByTestId('searchButton');
    const foundFilterList = queryByTestId('filterList');

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

    const foundSearchInput = getByTestId('searchInput');
    const foundFilterButton = queryByTestId('filterButton');
    const foundSearchButton = getByTestId('searchButton');
    const foundFilterList = getByTestId('filterList');

    expect(foundSearchInput.props.placeholder).toMatch('Filtrar');

    expect(foundSearchInput).toBeTruthy();
    expect(foundFilterButton).toBeNull();
    expect(foundSearchButton).toBeTruthy();
    expect(foundFilterList).toBeTruthy();
  });

  // it('should dont have an icon inside', async () => {
  //   const { queryByTestId } = render(
  //     <Input onChangeText={onChangeText} placeholder={placeholder} value="" />,
  //   );

  //   const foundIcon = queryByTestId('input-icon');

  //   expect(foundIcon).toBeFalsy();
  // });

  // it('should have a border and not have a shadow', () => {
  //   const { getByTestId } = render(
  //     <Input onChangeText={onChangeText} placeholder={placeholder} />,
  //   );

  //   const foundContainer = getByTestId('input-container');

  //   const styles = foundContainer.props.style[0];

  //   expect(styles).toHaveProperty('backgroundColor', 'transparent');
  //   expect(styles).toHaveProperty('borderWidth', 1);
  //   expect(styles).not.toHaveProperty('shadowOffset');
  // });

  // it('should have a shadow, a backgroundColor and not have a border', () => {
  //   const { getByTestId } = render(
  //     <Input
  //       onChangeText={onChangeText}
  //       hasShadow
  //       background="#fff"
  //       placeholder={placeholder}
  //     />,
  //   );

  //   const foundContainer = getByTestId('input-container');

  //   const styles = foundContainer.props.style[0];

  //   expect(styles).toHaveProperty('backgroundColor', '#fff');
  //   expect(styles).toHaveProperty('borderWidth', 0);
  //   expect(styles).toHaveProperty('shadowOffset');
  // });
});
