import React from 'react';
import * as S from './styles';
import { SearchIcon } from '../../../assets/icons';
import { TextElement } from '../TextElement';

interface ISearchBar {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

export const SearchBar: React.FC<ISearchBar> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleInputChange = (searchTerm: string) => {
    onSearchChange(searchTerm);
  };

  return (
    <S.SearchBarContainer>
      <TextElement text='Funcionários' variant='h1' />

      <S.SearchContainer>
        <SearchIcon />
        <S.Input
          placeholder='Pesquisar...'
          value={searchTerm}
          onChangeText={handleInputChange}
        />
      </S.SearchContainer>
    </S.SearchBarContainer>
  );
};
