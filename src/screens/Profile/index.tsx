import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Logo } from '../../components/Logo';

import { Input } from '../../components/Forms/Input';
import { InputMessage } from '../../components/Forms/InputMessage';
import { Button } from '../../components/Forms/Button';

import { 
  Container,
  Header,
  BorderLine,
  UserWrapper,
  Photo,
  IconEdit,
  Title,
  Content,
  Form, 
  Fields,
  Footer,
  InputText
} from './styles';

export function Profile() {

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Olá, Tayla Soares!
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
      <UserWrapper>
        <Photo source={{ uri: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}}
        /> 
        <IconEdit name="edit" />
      </UserWrapper>
      <Content>
        <Form>
          <Fields>
            <Input placeholder="Ocupação"
            />
            <Input placeholder="Cidade"
            />
            <Input placeholder="País"
            />
          </Fields>
        </Form> 
        <Footer>
          <InputText>Escreva um pouco sobre você:</InputText>
          <InputMessage />
          <Button title="Atualizar"/>
        </Footer> 
      </Content> 
    </Container>  
  )
}