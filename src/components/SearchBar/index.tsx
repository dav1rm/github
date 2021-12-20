import React, { useState } from 'react';
import ActionButton from '../ActionButton';
import Input from '../Input';
import { Container, Separator } from './styles';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [type, setType] = useState('search');
  return (
    <Container>
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
      <Input
        background="#fff"
        icon={type === 'search' ? 'search' : 'filter-list'}
        placeholder={`${
          type === 'search' ? 'Buscar' : 'Filtrar'
        } um repositório...`}
        hasShadow
      />
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
    </Container>
  );
};

export default SearchBar;
