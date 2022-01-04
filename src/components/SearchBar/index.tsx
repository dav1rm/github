import React, { useState } from 'react';
import ActionButton from '../ActionButton';
import Input from '../Input';
import Tag from '../Tag';
import {
  Container,
  BarContainer,
  InputContainer,
  Separator,
  TagsContainer,
} from './styles';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [type, setType] = useState('search');
  return (
    <Container>
      <BarContainer>
        {type === 'filter' && (
          <>
            <ActionButton
              onPress={() => setType('search')}
              iconName="search"
              height={40}
              width={48}
              iconSize={24}
              iconColor="#7E7E7E"
              bgColor="#fff"
              rounded={false}
              hasShadow
            />
            <Separator width={8} />
          </>
        )}
        <InputContainer>
          <Input
            background="#fff"
            icon={type === 'search' ? 'search' : 'filter-list'}
            placeholder={`${
              type === 'search' ? 'Buscar' : 'Filtrar'
            } um repositório...`}
            hasShadow
          />
        </InputContainer>
        {type === 'search' && (
          <>
            <Separator width={8} />
            <ActionButton
              height={40}
              width={48}
              iconSize={24}
              onPress={() => setType('filter')}
              iconName="filter-list"
              iconColor="#7E7E7E"
              bgColor="#fff"
              rounded={false}
              hasShadow
            />
          </>
        )}
      </BarContainer>
      <TagsContainer horizontal>
        {['Front End', 'Java', 'C#'].map((tag: string) => (
          <Tag label={tag} key={tag} type="add" onPress={() => null} />
        ))}
      </TagsContainer>
    </Container>
  );
};

export default SearchBar;
