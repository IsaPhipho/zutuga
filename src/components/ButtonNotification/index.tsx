import React from 'react'; 
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, IconNext } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function ButtonNotification({ 
  title,
  ...rest 
}: Props) {
  return (
    <Container 
      {...rest} 
    >
      <Title>
        { title }
      </Title>
      <IconNext name="arrow-right" />
    </Container>
  )
}