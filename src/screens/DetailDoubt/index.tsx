import React from 'react';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import { InputMessage } from '../../components/Forms/InputMessage';
import { Button } from '../../components/Forms/Button';
import { ButtonPush } from '../../components/ButtonPush';


import { 
  Container, 
  Title,
  Header,
  BorderLine,
  Card,
  UserWrapper,
  UserInfo,
  UserPhoto,
  UserName,
  UserRole,
  UserLocal,
  Footer,
  Text,
  Icon,
  InputView,
  InputText
} from './styles';

interface Props {
  closeDetailDoubt: () => void;
}

export function DetailDoubt({
  closeDetailDoubt
}: Props) {

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Detalhar Dúvida
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
        <Card>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' }}/>
            <UserInfo>
              <UserName>SEF não agenda!</UserName>
              <UserRole>Tiago, F.  |  Engenheiro</UserRole>
              <UserLocal>Lisboa, Portugal</UserLocal>
            </UserInfo>
            <Icon name={'bell-outline'} />
            <Icon name={'heart-outline'} />
          </UserWrapper>
          <Footer>
            <Text>
              Meu título venceu e o SEF {'\n'}
              não atende a chamada. Como {'\n'}
              regularizar a minha situação? 
            </Text>
          </Footer>
        </Card>
      <InputView>
        <InputText> Responder:</InputText>
        <InputMessage />  
        <Button title="Enviar Resposta" />  
        <ButtonPush 
          title="Voltar para Listagem" 
          onPress={closeDetailDoubt}
        /> 
      </InputView>
    </Container> 
  )
}