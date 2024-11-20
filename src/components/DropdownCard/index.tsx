import React, { useState } from 'react';
import * as S from './styles';
import { ArrowUpIcon, ArrowDownIcon } from '../../../assets/icons';
import { TextElement } from '../TextElement';
import { formatDate, formatPhone } from '../../utils/formatters';

interface IDropdownCard {
  name: string;
  role: string;
  startDate: string;
  phone: string;
  image: string;
}

export const DropdownCard: React.FC<IDropdownCard> = ({
  name,
  role,
  startDate,
  phone,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <S.Container>
      <S.Header onPress={toggleExpansion}>
        <S.ProfileImage source={{ uri: image }} />

        <S.NameRole>
          <TextElement text={name} />
        </S.NameRole>

        {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </S.Header>

      {isExpanded && (
        <S.DetailsContainer>
          <S.Detail>
            <TextElement text='Cargo' variant='h2' />
            <TextElement text={role} />
          </S.Detail>

          <S.Detail>
            <TextElement text='Data de admissão' variant='h2' />
            <TextElement text={formatDate(startDate)} />
          </S.Detail>

          <S.Detail>
            <TextElement text='Telefone' variant='h2' />
            <TextElement text={formatPhone(phone)} />
          </S.Detail>
        </S.DetailsContainer>
      )}
    </S.Container>
  );
};
