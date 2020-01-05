import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  HelpHeader,
  HelpsAnswer,
  AnswerText,
  HelpsTime,
  HelpsText,
} from './styles';

export default function Help({ helps, navigation }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(helps.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [helps]);

  return (
    <Container onPress={() => navigation.navigate('Answer', { helps })}>
      <HelpHeader>
        <HelpsAnswer>
          <Icon
            name="check-circle"
            color={helps.answer ? '#42cb59' : '#999'}
            size={15}
          />
          <AnswerText answered={helps.answer}>
            {helps.answer ? 'Respondido' : 'Sem resposta'}
          </AnswerText>
        </HelpsAnswer>
        <HelpsTime>{dateParsed}</HelpsTime>
      </HelpHeader>
      <HelpsText>{helps.question}</HelpsText>
    </Container>
  );
}
