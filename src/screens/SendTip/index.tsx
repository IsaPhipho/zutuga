import React, { useState } from 'react';
import { Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { InputMessage } from '../../components/Forms/InputMessage';
import { Button } from '../../components/Forms/Button';
import { ButtonPush } from '../../components/ButtonPush';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import logo from '../../assets/images/logo.png';

import { 
  Container, 
  Header,
  Title,
  BorderLine,
  Body,
  BodyText,
  Footer,
  FooterText,
} from './styles';

export function SendTip() {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name:'Categoria'
  });
  
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Image
          source={logo} 
          resizeMode="cover" 
          style={logo}
        >
        </Image>
        <Title> 
          Enviar Dica
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
        
        <BodyText>Escolha a categoria:</BodyText>
        <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
      </Body>
      
      <Footer>
        <FooterText>Sua dica:</FooterText>
        <InputMessage placeholder="Digite aqui"/>
        <ButtonPush title="Anexar"/>
        <Button title="Publicar"/>
      </Footer>  
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>  
  )
}