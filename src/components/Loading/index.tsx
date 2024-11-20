import React from 'react';
import * as S from './styles';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

export const Loading = () => {
  const { colors } = useTheme();

  return (
    <S.LoadingWrapper>
      <ActivityIndicator size='large' color={colors?.primary?.blue} />
    </S.LoadingWrapper>
  );
};
