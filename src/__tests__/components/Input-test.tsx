import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '~/components';

describe('Input Component', () => {
  const placeholder = 'Type your name';
  const newValue = 'New value';
  const onChangeText = jest.fn();

  it('should be changed value correctly', () => {
    const { getByPlaceholderText } = render(
      <Input onChangeText={onChangeText} placeholder={placeholder} value="" />,
    );
    const foundInput = getByPlaceholderText(placeholder);

    fireEvent(foundInput, 'focus');
    fireEvent.changeText(foundInput, newValue);

    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });

  it('should have an icon inside', async () => {
    const { getByTestId } = render(
      <Input
        onChangeText={onChangeText}
        icon="search"
        placeholder={placeholder}
        value=""
      />,
    );

    const foundIcon = getByTestId('input-icon');

    expect(foundIcon).toBeTruthy();
  });

  it('should dont have an icon inside', async () => {
    const { queryByTestId } = render(
      <Input onChangeText={onChangeText} placeholder={placeholder} value="" />,
    );

    const foundIcon = queryByTestId('input-icon');

    expect(foundIcon).toBeFalsy();
  });

  it('should have a border and not have a shadow', () => {
    const { getByTestId } = render(
      <Input onChangeText={onChangeText} placeholder={placeholder} />,
    );

    const foundContainer = getByTestId('input-container');

    const styles = foundContainer.props.style[0];

    expect(styles).toHaveProperty('backgroundColor', 'transparent');
    expect(styles).toHaveProperty('borderWidth', 1);
    expect(styles).not.toHaveProperty('shadowOffset');
  });

  it('should have a shadow, a backgroundColor and not have a border', () => {
    const { getByTestId } = render(
      <Input
        onChangeText={onChangeText}
        hasShadow
        background="#fff"
        placeholder={placeholder}
      />,
    );

    const foundContainer = getByTestId('input-container');

    const styles = foundContainer.props.style[0];

    expect(styles).toHaveProperty('backgroundColor', '#fff');
    expect(styles).toHaveProperty('borderWidth', 0);
    expect(styles).toHaveProperty('shadowOffset');
  });
});
