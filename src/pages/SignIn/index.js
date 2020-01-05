import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  FormInput,
  FormButton,
  ImageContainer,
  LogoEsq,
  LogoDir,
  LogoText,
  TextButton,
} from './styles';

import logoesq from '~/assets/logoesq.png';
import logodir from '~/assets/logodir.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <ImageContainer>
        <LogoEsq source={logoesq} />
        <LogoDir source={logodir} />
      </ImageContainer>
      <LogoText>GYMPOINT</LogoText>
      <FormInput
        placeholder="Informe seu ID de cadastro"
        autoCapitalize="none"
        value={id}
        onChangeText={setId}
      />
      <FormButton onPress={handleSubmit}>
        <TextButton>Entrar no sistema</TextButton>
      </FormButton>
    </Container>
  );
}
