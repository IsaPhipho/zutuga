import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import { 
  Container, 
  Logo,
  Header,
  BorderLine,
  UserWrapper,
  UserInfo,
  Photo,
  IconEdit,
  User,
  UserGreeting,
  UserName,
  Title,
  Form, 
  Fields,
  Footer,
  InputText,
  InputForm,
} from './styles';

export function Profile() {
  return (
    <Container>
      <Header>
        <Logo>zutuga</Logo>
        <Title> 
          Meu perfil
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
        <UserInfo>
          <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47599339?v=4}'}}
          /> 
          <IconEdit name="edit" />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Isa</UserName>
          </User>
        </UserInfo>
      </UserWrapper>
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
        <InputForm />
        <Button title="Atualizar"/>
      </Footer>  
    </Container>  
  )
}