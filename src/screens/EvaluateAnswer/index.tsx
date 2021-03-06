import React, { useState } from 'react';

import { 
  Modal,
  TouchableWithoutFeedback, 
  Keyboard
 } from 'react-native';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Button } from '../../components/Forms/Button';
import { ButtonPush } from '../../components/ButtonPush';
import { Success } from '../Success';

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
  MessageBox,
  IconView,
  Icon,
  View
} from './styles';

export function EvaluateAnswer() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  function handleNavigateToNotification() {
    navigate('Notification');
  }

  function handleOpenSuccessModal() {
    setSuccessModalOpen(true);
  }

  function handleCloseSuccessModal() {
    setSuccessModalOpen(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Logo />
          <Title> 
            Avaliar resposta
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
        <Modal visible={successModalOpen}>
          <Success
            closeSuccessMessage={handleCloseSuccessModal}
          />
        </Modal>
        <Content>
          <Body>
            <Card>
              <UserWrapper>
                <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' }}/>
                <UserInfo>
                  <UserName>SEF n??o agenda!</UserName>
                  <UserRole>Priscila Souza  |  Advogada</UserRole>
                  <UserLocal>Braga, Portugal</UserLocal>
                </UserInfo>
                <IconCard name={'bell-outline'} />
                <IconCard name={'heart-outline'} />
              </UserWrapper>
              <FooterCard>
                <Text>
                  Ol??, Ju! {'\n'}
                  N??o se preocupe. A perman??ncia prorrogou at?? 31/03/2022,
                  de acordo com o Decreto-Lei n?? 119-A/2021. {'\n'}
                  J?? viu que o n??mero de contato do SEF mudou?
                  Agora ?? 217 115 00 ou 965 903 700.{'\n'} {'\n'}
                  Abra??os,{'\n'}
                  Priscila
                </Text>
              </FooterCard>
            </Card>
          </Body>
          <Footer>
            <MessageText>Comente:</MessageText>
            <MessageBox />
            <MessageText>Avalie:</MessageText>
            <IconView>
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star-outline" />
              <Icon name="star-outline" />
            </IconView>
            <Button title="Publicar"
              onPress={handleOpenSuccessModal}
            /> 
          </Footer> 
        </Content> 
        <View>
          <ButtonPush 
            title="Voltar" 
            onPress={handleNavigateToNotification}
          />
        </View> 
      </Container> 
    </TouchableWithoutFeedback>
  )
}   