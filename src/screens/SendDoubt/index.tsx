import React, { useState } from 'react';

import { Modal } from 'react-native';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { Button } from '../../components/Forms/Button';
import { ButtonPush } from '../../components/ButtonPush';
import { Success } from '../Success';

import { 
  Container, 
  Title,
  Header,
  BorderLine,
  Body,
  Content,
  Footer,
  MessageText,
  MessageBox
} from './styles';

export function SendDoubt() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name:'Categoria'
  });

  function handleNavigateToHome() {
    navigate('Home');
  }

  function handleOpenSuccessModal() {
    setSuccessModalOpen(true);
  }

  function handleCloseSuccessModal() {
    setSuccessModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Envie sua dúvida
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
      <Body>
        <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
      </Body>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
      <Modal visible={successModalOpen}>
        <Success
          closeSuccessMessage={handleCloseSuccessModal}
        />
      </Modal>
      <Content>
        <Footer>
            <MessageText>Digite sua dúvida:</MessageText>
            <MessageBox />
            <ButtonPush title="Anexar arquivos (máx. 300KB)"/>
            <Button 
              title="Publicar"
              onPress={handleOpenSuccessModal}
            />
            <ButtonPush 
              title="Voltar"
              onPress={handleNavigateToHome}
            />
          </Footer> 
        </Content>
    </Container> 
  )
}   