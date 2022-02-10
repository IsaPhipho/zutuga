import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Logo } from '../../components/Logo';

import { 
  Container,
  Title,
  Header,
  BorderLine,
  DoubtText,
  TipText,
  Card02,
  Card03,
  CardView,
  UserWrapper,
  UserInfo,
  UserPhoto,
  TipTitle,
  UserRole,
  UserLocal,
  Footer,
  Text,
  TextMore,
  Icon,
} from './styles';

export function FavoriteList() {
  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Favoritos
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
      <DoubtText>Dúvidas</DoubtText>
      <CardView>
          <Card03>
            <UserWrapper>
              <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}/>
              <UserInfo>
                <TipTitle>Estudos</TipTitle>
                <UserRole>Tayla Soares  |  Estudante</UserRole>
                <UserLocal>Salvador, Brasil</UserLocal>
              </UserInfo>
              <Icon name={'bell-off-outline'} />
              <Icon name={'heart'} />
            </UserWrapper>
            <Footer>
              <Text>
                Tenho interesse em realizar{'\n'}
                curso de Mestrado em Portugal... 
              </Text>  
              <TextMore>
              leia mais
              </TextMore> 
            </Footer>
          </Card03>
          <Card03>
            <UserWrapper>
              <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}/>
              <UserInfo>
                <TipTitle>Estudos</TipTitle>
                <UserRole>Tayla Soares  |  Estudante</UserRole>
                <UserLocal>Salvador, Brasil</UserLocal>
              </UserInfo>
              <Icon name={'bell-off-outline'} />
              <Icon name={'heart'} />
            </UserWrapper>
            <Footer>
              <Text>
                Tenho interesse em realizar{'\n'}
                curso de Mestrado em Portugal... 
              </Text>  
              <TextMore>
              leia mais
              </TextMore> 
            </Footer>
          </Card03>
        </CardView>  
        <TipText>Dicas</TipText>
        <CardView>
          <Card02>
            <UserWrapper>
              <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1613188665424-b6790816c9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhemlsaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' }}/>
              <UserInfo>
                <TipTitle>Queijo coalho</TipTitle>
                <UserRole>Rodolfo Araújo  |  Estudante</UserRole>
                <UserLocal>Braga, Portugal</UserLocal>
              </UserInfo>
              <Icon name={'coffee'} />
              <Icon name={'heart'} />
            </UserWrapper>
            <Footer>
              <Text>
                Achei queijo coalho no Mercado Municipal de Guimarães!
              </Text>
            </Footer>
          </Card02>
          <Card02>
            <UserWrapper>
              <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1613188665424-b6790816c9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhemlsaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' }}/>
              <UserInfo>
                <TipTitle>Queijo coalho</TipTitle>
                <UserRole>Rodolfo Araújo  |  Estudante</UserRole>
                <UserLocal>Braga, Portugal</UserLocal>
              </UserInfo>
              <Icon name={'coffee'} />
              <Icon name={'heart'} />
            </UserWrapper>
            <Footer>
              <Text>
                Achei queijo coalho no Mercado Municipal de Guimarães!
              </Text>
            </Footer>
          </Card02>
        </CardView>
    </Container> 
  )
}   