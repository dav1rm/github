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

  // it('should have light mode', () => {
  //   const button = render(<Button onPress={mockFn} light label={title} />);
  //   const { light } = button.container.props;

  //   expect(light).toBeTruthy();
  // });

  // it('should be pressed', () => {
  //   const button = render(<Button onPress={mockFn} label={title} />);

  //   fireEvent.press(button.container);

  //   expect(mockFn).toBeCalled();
  // });
});
