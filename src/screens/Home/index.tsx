import React, { useState } from 'react';
import { Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { Button } from '../../components/Forms/Button';
import { SectionTypeButton } from '../../components/SectionTypeButton';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import logo from '../../assets/images/logo.png';

import { 
  Container, 
  Header,
  Title,
  BorderLine,
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
        <Title> 
          Categorias
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