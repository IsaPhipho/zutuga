import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Image } from 'react-native';

import { Button } from '../../components/Forms/Button';
import { SectionTypeButton } from '../../components/SectionTypeButton';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import logo from '../../assets/images/logo.png';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Body,
  BodyText,
  Footer,
  FooterText,
  SectionType
} from './styles';

export function Home() {
  const [sectionType, setSectionType ] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name:'Categoria'
  });

  function handleSectionTypeSelect(type: 'question' | 'tip') {
    setSectionType(type);
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
        <Image
          source={logo} 
          resizeMode="cover" 
          style={logo}
        >
        </Image>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47599339?v=4}'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Isa</UserName>
            </User>
          </UserInfo>
        </UserWrapper>  
      </Header>
      
      <Body>
        
        <BodyText>Escolha a categoria:</BodyText>
        <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
      </Body>
      
      <Footer>
        <FooterText>Escolha a seção:</FooterText>
        <SectionType>
            <SectionTypeButton 
              type="question"
              title="Dúvidas"
              onPress={() => handleSectionTypeSelect('question')}
              isActive={sectionType === 'question'}
            />
            <SectionTypeButton 
              type="tip"
              title="Dicas"
              onPress={() => handleSectionTypeSelect('tip')}
              isActive={sectionType === 'tip'}
            />
          </SectionType>
        <Button title="Listar"/>
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