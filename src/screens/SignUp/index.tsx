import React from 'react';
import { ImageBackground } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import tileWallpaper from '../../assets/images/tileWallpaper.png';

import { 
  Container, 
  Logo,
  Header,
  Title,
  Form, 
  Fields,
  Footer,
  FooterText,

} from './styles';

export function SignUp() {
  return (
    <Container>
      <ImageBackground 
        source={tileWallpaper} 
        resizeMode="cover" 
        style={tileWallpaper}
      >
        <Header>
          <Logo>zutuga</Logo>
        </Header>
      </ImageBackground>
      <Title> 
        Cadastre a sua conta
      </Title>

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
        <Button title="Entrar na minha conta"/>
      </Footer>  
    </Container>  
  )
}