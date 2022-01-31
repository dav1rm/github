import React from 'react';
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

export type SearchInputType = 'filter' | 'search';

interface SearchBarProps {
  value: string;
  type: SearchInputType;
  onChangeText: (value: string) => void;
  onChangeType: (type: SearchInputType) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  type,
  onChangeType,
  onChangeText,
}) => {
  const placeholder =
    type === 'search'
      ? 'Buscar um repositório pelo nome...'
      : 'Filtrar por uma tecnologia...';

  return (
    <Container>
      <BarContainer>
        {type === 'filter' && (
          <>
            <ActionButton
              onPress={() => onChangeType('search')}
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
            placeholder={placeholder}
            hasShadow
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={onChangeText}
            value={value}
          />
        </InputContainer>
        {type === 'search' && (
          <>
            <Separator width={8} />
            <ActionButton
              height={40}
              width={48}
              iconSize={24}
              onPress={() => onChangeType('filter')}
              iconName="filter-list"
              iconColor="#7E7E7E"
              bgColor="#fff"
              rounded={false}
              hasShadow
            />
          </>
        )}
      </BarContainer>
      {type === 'filter' && (
        <TagsContainer horizontal>
          {['Front End', 'Java', 'C#'].map((tag: string) => (
            <Tag label={tag} key={tag} type="add" onPress={() => null} />
          ))}
        </TagsContainer>
      )}
    </Container>
  );
};

export default SearchBar;
