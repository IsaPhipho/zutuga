import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Input } from '../../components/Forms/Input';
import { InputMessage } from '../../components/Forms/InputMessage';
import { Button } from '../../components/Forms/Button';

import { Home } from '../Home';

import { 
  Container, 
  Logo,
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
        <Logo>zutuga</Logo>
        <Title> 
          Olá, Isa!
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
        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47599339?v=4}'}}
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
          <InputText>Sobre mim:</InputText>
          <InputMessage placeholder="Digite aqui"/>
          <Button title="Atualizar"/>
        </Footer> 
      </Content> 
    </Container>  
  )
}