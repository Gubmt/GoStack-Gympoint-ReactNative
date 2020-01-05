import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, CheckinNumber, CheckinTime } from './styles';

export default function Checkin({ checkin, number }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(checkin.createdAt), new Date(), {
      locale: pt,
      addSuffix: false,
    });
  }, [checkin]);

  return (
    <Container>
      <CheckinNumber>Check-in #{number + 1}</CheckinNumber>
      <CheckinTime>{dateParsed}</CheckinTime>
    </Container>
  );
}
