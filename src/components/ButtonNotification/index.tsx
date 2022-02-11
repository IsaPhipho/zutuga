import React from 'react'; 
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, IconNext } from './styles';

interface Props extends TouchableOpacityProps {
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