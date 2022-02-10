import React, { useContext} from 'react';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import AuthContext from '../../contexts/auth';

import { 
  Container, 
  Header,
  BorderLine,
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
  const { signed , login} = useContext(AuthContext);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  console.log(signed);
    // email, password (formulário omitido)
  function handleLogin() {
    login();
  }

  function handleNavigateToSignUp() {
    navigate('SignUp');
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Entre na conta
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
          <Input placeholder="Email"
          />
          <Input placeholder="Senha"
          />
          <Button 
            title="Entrar"
            onPress={handleLogin}
          />
        </Fields>
        <FormText>
          <ForgotText>Esqueceu a sua senha?{" "}</ForgotText> 
          <LinkText>{" "}Clique aqui</LinkText>
        </FormText>

      </Form> 

      <Footer>
        <FooterText>Ainda não tem conta?</FooterText>
        <Button 
          title="Cadastrar a minha conta"
          onPress={handleNavigateToSignUp}
        />
      </Footer>  
    </Container>  
  )
}