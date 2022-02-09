import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Button } from '../../components/Forms/Button';
import { SectionTypeButton } from '../../components/SectionTypeButton';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
  Container, 
  Header,
  Title,
  BorderLine,
  Body,
  BodyText,
  Footer,
  FooterText,
  FirstSectionType,
  SecondSectionType
} from './styles';

export function Home() {
  const [sectionType, setSectionType ] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name:'Categoria'
  });

  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleSectionTypeSelect(type: 'question' | 'tip' | 'listQuestion' | 'listTip') {
    setSectionType(type);
  }
  
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleSelectSection() {
    if(!sectionType) {
      return Alert.alert('Por favor, informe o que deseja fazer.');
    }

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    
    if(category.key !== 'category' && sectionType === 'listQuestion') {
      navigate('DoubtList')
    }

    if(category.key !== 'category' && sectionType === 'listTip') {
      navigate('TipList')
    } 

    if(category.key !== 'category' && sectionType === 'question') {
      navigate('SendDoubt')
    } 

    if(category.key !== 'category' && sectionType === 'tip') {
      navigate('SendTip')
    }
    
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Title>Categorias</Title>
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
        <FooterText>O que você deseja fazer?</FooterText>
          <FirstSectionType>
            <SectionTypeButton 
              type="listQuestion"
              title="Listar dúvidas"
              onPress={() => handleSectionTypeSelect('listQuestion')}
              isActive={sectionType === 'listQuestion'}
            />
            <SectionTypeButton 
              type="question"
              title="Enviar dúvida"
              onPress={() => handleSectionTypeSelect('question')}
              isActive={sectionType === 'question'}
            />
          </FirstSectionType>
          <SecondSectionType>
              <SectionTypeButton 
                type="listTip"
                title="Listar dicas"
                onPress={() => handleSectionTypeSelect('listTip')}
                isActive={sectionType === 'listTip'}
              />
              <SectionTypeButton 
                type="tip"
                title="Enviar dica"
                onPress={() => handleSectionTypeSelect('tip')}
                isActive={sectionType === 'tip'}
              />
            </SecondSectionType>
        <Button 
          title="Confirmar"
          onPress={handleSelectSection}
        />
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