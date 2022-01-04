import React from 'react';
import ActionButton from '../ActionButton';
import { Separator } from '../SearchBar/styles';
import { Container, Text } from './styles';

interface TagProps {
  label: string;
  onPress?: () => void;
  type?: 'close' | 'add';
  small?: boolean;
}

const Tag: React.FC<TagProps> = ({
  label,
  onPress,
  small = false,
  type = 'add',
}) => {
  return (
    <Container small={small}>
      <Text small={small}>{label}</Text>
      {onPress && (
        <>
          <Separator width={8} />
          <ActionButton
            height={16}
            width={16}
            iconSize={10}
            onPress={onPress}
            iconName={type}
            iconColor={type === 'add' ? '#000' : '#fff'}
            bgColor={type === 'add' ? '#fff' : '#000'}
            rounded={true}
          />
        </>
      )}
    </Container>
  );
};

export default Tag;
