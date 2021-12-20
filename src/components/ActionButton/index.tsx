import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';

interface ActionButtonProps {
  iconName: string;
  iconSize: number;
  iconColor?: string;
  bgColor?: string;
  height?: number;
  width?: number;
  rounded?: boolean;
  hasShadow?: boolean;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  iconName,
  iconSize,
  bgColor,
  iconColor,
  onPress,
  height,
  width,
  rounded = true,
  hasShadow,
}) => {
  return (
    <Container
      onPress={onPress}
      height={height}
      width={width}
      color={bgColor}
      rounded={rounded}
      hasShadow={hasShadow}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </Container>
  );
};

export default ActionButton;
