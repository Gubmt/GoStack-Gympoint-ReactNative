import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Help from '~/components/Help';

import Header from '~/components/Header';

import api from '~/services/api';

import { Container, AddButton, TextButton, HelpsList } from './styles';

function HelpOrder({ navigation, isFocused }) {
  const id = useSelector(state => state.auth.id);
  const [helps, setHelps] = useState([]);

  async function loadHelps() {
    const response = await api.get(`students/${id}/help-orders`);

    setHelps(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadHelps();
    }
  }, [isFocused]); // eslint-disable-line

  return (
    <Container>
      <AddButton onPress={() => navigation.navigate('NewHelpOrder')}>
        <TextButton>Novo pedido de auxílio</TextButton>
      </AddButton>
      {helps && (
        <HelpsList
          data={helps}
          keyExtractor={help => String(help.id)}
          renderItem={({ item }) => (
            <Help helps={item} navigation={navigation} />
          )}
        />
      )}
    </Container>
  );
}

HelpOrder.navigationOptions = {
  headerTitle: <Header />,
};

export default withNavigationFocus(HelpOrder);
