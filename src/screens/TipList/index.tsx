import React, { useState } from 'react';

import { Modal } from 'react-native';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { 
  Container, 
  Title,
  Header,
  BorderLine,
  Body,
  Content,
  Card,
  Card02,
  Card03,
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

export function TipList() {
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
        <Logo />
        <Title> 
          Dicas
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

      <Content>
        <Card>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-successful-hispanic-business-man-looks-directly-at-the-picture-id1301234881?b=1&k=20&m=1301234881&s=170667a&w=0&h=HOVBX_cwVsAEAGH41cag7DJ9njkC-JW_A6CJjANNQvI=' }}/>
            <UserInfo>
              <TipTitle>Vacina Covid</TipTitle>
              <UserRole>Lucas Martins  |  Motorista</UserRole>
              <UserLocal>Lisboa, Portugal</UserLocal>
            </UserInfo>
            <Icon name={'activity'} />
            <Icon name={'heart'} />
          </UserWrapper>
          <Footer>
            <Text>
              Portugal já aceita as vacinas Sinopharm, 
              Sinovac e Covaxin ...
            </Text>
            <TextMore>
              leia mais
            </TextMore>
          </Footer>
        </Card>

        <Card03>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://media.istockphoto.com/photos/young-latin-student-girl-smiling-happy-holding-folder-at-the-city-picture-id1288634246?b=1&k=20&m=1288634246&s=170667a&w=0&h=daU-ru6qw6HYBtHlutCImUtrBWVzZ2v6WzjiV7tdz6w=' }}/>
            <UserInfo>
              <TipTitle>App Siga</TipTitle>
              <UserRole>Jana Veloso  |  Advogada</UserRole>
              <UserLocal>Porto, Portugal</UserLocal>
            </UserInfo>
            <Icon name={'flag'} />
            <Icon name={'heart'} />
          </UserWrapper>
          <Footer>
            <Text>
              Com o app Siga você pode {'\n'} 
              agendar atendimento e retirar...
            </Text>
            <TextMore>
            leia mais
            </TextMore>
          </Footer>
        </Card03>

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
      </Content>    
    </Container> 
  )
}    