import React from 'react';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import { Button } from '../../components/Forms/Button';
import { ButtonPush } from '../../components/ButtonPush';

import { 
  Container, 
  Title,
  Header,
  BorderLine,
  Body,
  Card,
  UserWrapper,
  UserInfo,
  UserPhoto,
  UserName,
  UserRole,
  UserLocal,
  IconCard,
  FooterCard,
  Text,
  Content,
  Footer,
  MessageText,
  MessageBox
} from './styles';

export function EvaluateAnswer() {

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Ver e avaliar resposta
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
      <Content>
        <Body>
          <Card>
            <UserWrapper>
              <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' }}/>
              <UserInfo>
                <UserName>SEF não agenda!</UserName>
                <UserRole>Tiago, F.  |  Engenheiro</UserRole>
                <UserLocal>Lisboa, Portugal</UserLocal>
              </UserInfo>
              <IconCard name={'bell-outline'} />
              <IconCard name={'heart-outline'} />
            </UserWrapper>
            <FooterCard>
              <Text>
                Meu título venceu e o SEF {'\n'}
                não atende a chamada. Como {'\n'}
                fica a minha situação? Estou {'\n'}
                muito preocupado!
              </Text>
            </FooterCard>
          </Card>
        </Body>
        <Footer>
          <MessageText>Digite sua resposta:</MessageText>
          <MessageBox />
          <ButtonPush title="Anexar arquivos (max. 300KB)"/>
          <Button title="Publicar"/>
        </Footer> 
      </Content>  
    </Container> 
  )
}   