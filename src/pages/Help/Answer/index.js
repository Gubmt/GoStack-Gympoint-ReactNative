import React from 'react';
import { TouchableOpacity } from 'react-native';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import {
  Container,
  AnswerBox,
  QuestionHeader,
  Title,
  Time,
  Content,
  AnswerHeader,
} from './styles';

export default function Answer({ navigation }) {
  const help = navigation.getParam('helps');

  const questionTime = formatRelative(parseISO(help.created_at), new Date(), {
    locale: pt,
    addSuffix: true,
  });

  const answerTime = help.answer_at
    ? formatRelative(parseISO(help.answer_at), new Date(), {
        locale: pt,
        addSuffix: true,
      })
    : null;

  return (
    <Container>
      <AnswerBox>
        <QuestionHeader>
          <Title>PERGUNTA</Title>
          <Time>{questionTime}</Time>
        </QuestionHeader>
        <Content>{help.question}</Content>

        <AnswerHeader>
          <Title>RESPOSTA</Title>
          <Time>{answerTime}</Time>
        </AnswerHeader>
        <Content>{help.answer ? help.answer : 'Aguardando resposta'}</Content>
      </AnswerBox>
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerTitle: <Header />,
  headerTitleStyle: {
    alignContent: 'center',
  },
  headerTitleContainerStyle: {
    paddingRight: 56,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HelpOrder');
      }}
    >
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
