import React from 'react';

import logo from '~/assets/logosmall.png';

import { Container, Logo, Textlogo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Textlogo>GYMPOINT</Textlogo>
    </Container>
  );
}
