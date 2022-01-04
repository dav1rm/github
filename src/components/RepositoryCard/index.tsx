import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from '../ActionButton';
import Tag from '../Tag';
import {
  Container,
  Title,
  Description,
  Label,
  Header,
  Footer,
  FooterItem,
  HeaderContent,
  HeaderInfo,
  TagList,
} from './styles';

interface RepositoryCardProps {
  repo: any;
  onPress: () => void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo, onPress }) => {
  const footerInfos = [
    {
      icon: 'language',
      label: repo.language,
    },
    {
      icon: 'star',
      label: repo.stars,
    },
    {
      icon: 'supervisor-account',
      label: repo.users,
    },
    {
      icon: 'access-time',
      label: new Date(repo.lastCommit).toDateString(),
    },
  ];

  return (
    <Container onPress={onPress}>
      <Header>
        <HeaderContent>
          <HeaderInfo>
            <Title>{repo.name}</Title>
            <Icon name="keyboard-arrow-right" size={24} color="#000" />
          </HeaderInfo>
          <ActionButton
            onPress={() => null}
            iconName="star"
            iconSize={18}
            bgColor="rgba(255, 199, 0, 0.16)"
            iconColor="#FFC700"
          />
        </HeaderContent>

        <Description>{repo.description}</Description>
      </Header>

      <TagList>
        {repo.tags.map((tag: string) => (
          <Tag small key={tag} label={`#${tag}`} />
        ))}
        <ActionButton
          onPress={() => null}
          iconName="edit"
          height={20}
          width={20}
          iconSize={12}
          bgColor="#0017FF"
          iconColor="#fff"
        />
      </TagList>

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

export default RepositoryCard;
