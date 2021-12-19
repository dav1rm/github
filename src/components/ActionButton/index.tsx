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
}) => {
  return (
    <Container onPress={onPress} height={height} width={width} color={bgColor}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </Container>
  );
};

export default ActionButton;
