import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from '~/components';

describe('Button Component', () => {
  const title = 'Button Title';
  const mockFn = jest.fn();

  test('should render title correctly', () => {
    const { getByText } = render(<Button onPress={mockFn} label={title} />);
    const foundButtonTitle = getByText(title);

    expect(foundButtonTitle.props.children).toBe(title);
  });

  test('should have height of 50', () => {
    const button = render(
      <Button onPress={mockFn} height={50} label={title} />,
    );
    const { height } = button.container.props;

    expect(height).toBe(50);
  });

  test('should have light mode', () => {
    const button = render(<Button onPress={mockFn} light label={title} />);
    const { light } = button.container.props;

    expect(light).toBeTruthy();
  });

  test('should be pressed', () => {
    const button = render(<Button onPress={mockFn} label={title} />);

    fireEvent.press(button.container);

    expect(mockFn).toBeCalled();
  });
});
