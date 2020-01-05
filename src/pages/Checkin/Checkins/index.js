import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import Checkin from '~/components/Checkin';

import api from '~/services/api';

import { Container, AddButton, TextButton, CheckinList } from './styles';

export default function Checkins() {
  const id = useSelector(state => state.auth.id);
  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get(`students/${id}/checkins`);

    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
  }, []); // eslint-disable-line

  async function handleSubmit() {
    const response = await api.post(`students/${id}/checkins`);

    if (response.data.error)
      Alert.alert(
        'Atenção',
        'Você só pode fazer 5 checkins em um período de 7 dias.'
      );

    loadCheckins();
  }

  return (
    <Container>
      <AddButton onPress={() => handleSubmit()}>
        <TextButton>Novo check-in</TextButton>
      </AddButton>
      {checkins && (
        <CheckinList
          data={checkins}
          keyExtractor={checkin => String(checkin.id)}
          renderItem={({ item, index }) => (
            <Checkin checkin={item} number={index} />
          )}
        />
      )}
    </Container>
  );
}
