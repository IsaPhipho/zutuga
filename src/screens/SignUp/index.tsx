import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import { 
  Container, 
  Logo,
  Header,
  BorderLine,
  Title,
  Form, 
  Fields,
  Footer,
  FooterText,

} from './styles';

export function SignUp() {
  return (
    <Container>
      <Header>
        <Logo>zutuga</Logo>
        <Title> 
          Cadastre a sua conta
        </Title>
      </Header>
      <BorderLine>
        <LinearGradient
          start={{x:0, y:1}}
          end={{x:1, y:0}}
          locations={[0.25, 0.45, 0.75]}
          colors={['#F5EA4E', '#65FC8E', '#F5785A']}
          style={{
            flex: 1
          }}>
        </LinearGradient>
      </BorderLine>

      <Form>
        <Fields>
          <Input placeholder="Nome"
          />
          <Input placeholder="Email"
          />
          <Input placeholder="Senha"
          />
          <Input placeholder="Repetir senha"
          />
          <Button title="Cadastrar"/>
        </Fields>
      </Form> 

      <Footer>
        <FooterText>Já tem conta?</FooterText>
        <Button title="Entrar na conta"/>
      </Footer>  
    </Container>  
  )
}