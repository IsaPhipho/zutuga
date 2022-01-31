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
  FormText,
  ForgotText,
  LinkText,
  Fields,
  Footer,
  FooterText,

} from './styles';

export function Login() {
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
        Entre na sua conta
      </Title>

      <Form>
        <Fields>
          <Input placeholder="Email"
          />
          <Input placeholder="Senha"
          />
          <Button title="Entrar"/>
        </Fields>

        <FormText>
          <ForgotText>Esqueceu a sua senha?</ForgotText> \n
          <LinkText>Clique aqui</LinkText>
        </FormText>

      </Form> 

      <Footer>
        <FooterText>Ainda não tem conta?</FooterText>
        <Button title="Cadastrar a minha conta"/>
      </Footer>  
    </Container>  
  )
}