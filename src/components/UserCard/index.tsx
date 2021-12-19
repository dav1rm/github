import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from '../ActionButton';
import {
  Container,
  Avatar,
  Title,
  Description,
  Label,
  Header,
  Footer,
  FooterItem,
  HeaderContent,
  HeaderInfo,
} from './styles';

interface UserCardProps {
  user: any;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
  const footerInfos = [
    {
      icon: 'business',
      label: user.company,
    },
    {
      icon: 'place',
      label: user.address,
    },
    {
      icon: 'star',
      label: user.stars,
    },
  ];

  return (
    <Container onPress={onPress}>
      <Header>
        <Avatar source={{ uri: user.avatar_url }} />
        <HeaderContent>
          <HeaderInfo>
            <Title>{user.name}</Title>
            <Icon name="keyboard-arrow-right" size={24} color="#000" />
          </HeaderInfo>
          <Description>{user.username}</Description>
        </HeaderContent>
        <ActionButton
          onPress={() => null}
          iconName="delete"
          iconSize={18}
          iconColor="#000"
        />
      </Header>
      <Footer>
        {footerInfos.map((info, index) => (
          <FooterItem key={info.icon} isLast={footerInfos.length - 1 === index}>
            <Icon name={info.icon} size={16} color="#E5E5E5" />
            <Label>{info.label}</Label>
          </FooterItem>
        ))}
      </Footer>
    </Container>
  );
};

export default UserCard;
