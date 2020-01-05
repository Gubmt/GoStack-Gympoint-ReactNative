import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';

import { Container, InputQuestion, SendButton, TextButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const id = useSelector(state => state.auth.id);
  const [question, setQuestion] = useState({});

  async function handleSubmit() {
    await api.post(`students/${id}/help-orders`, {
      question,
    });

    navigation.navigate('HelpOrder');
  }

  return (
    <Container>
      <InputQuestion onChangeText={setQuestion} />
      <SendButton onPress={() => handleSubmit()}>
        <TextButton>Enviar pedido</TextButton>
      </SendButton>
    </Container>
  );
}

NewHelpOrder.navigationOptions = ({ navigation }) => ({
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
