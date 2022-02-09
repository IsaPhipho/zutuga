import React, { useState } from 'react';

import { Modal } from 'react-native';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/CategorySelectButton';
// import { ListCard } from "../../components/ListCard";

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
  UserName,
  UserRole,
  UserLocal,
  Footer,
  Text,
  TextMore,
  Icon,
} from './styles';

export function DoubtList() {
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
          Dúvidas
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
              não atende a chamada. Como... 
            </Text>
            <TextMore>
              leia mais
            </TextMore>
          </Footer>
        </Card>

        <Card03>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1563132305-24784f57eeea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}/>
            <UserInfo>
              <UserName>Reagrupamento</UserName>
              <UserRole>Elza Sanches  |  Arquiteta</UserRole>
              <UserLocal>Curitiba, Brasil</UserLocal>
            </UserInfo>
            <Icon name={'bell-off-outline'} />
            <Icon name={'heart-outline'} />
          </UserWrapper>
          <Footer>
            <Text>
              Posso solicitar reagrupamento de familiar no Brasil?
            </Text>
          </Footer>
        </Card03>

        <Card02>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff' }}/>
            <UserInfo>
              <UserName>Startup Visa</UserName>
              <UserRole>José Duarte  |  Developer</UserRole>
              <UserLocal>São Paulo, Brasil</UserLocal>
            </UserInfo>
            <Icon name={'bell-off-outline'} />
            <Icon name={'heart-outline'} />
          </UserWrapper>
          <Footer>
            <Text>
              Qual o prazo médio para retirada do Startup visa? 
            </Text>
          </Footer>
        </Card02>

        <Card03>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}/>
            <UserInfo>
              <UserName>Estudos</UserName>
              <UserRole>Tayla Soares  |  Estudante</UserRole>
              <UserLocal>Salvador, Brasil</UserLocal>
            </UserInfo>
            <Icon name={'bell-off-outline'} />
            <Icon name={'heart'} />
          </UserWrapper>
          <Footer>
            <Text>
              Tenho interesse em realizar{'\n'}
              curso de Mestrado em Portug... 
            </Text>  
            <TextMore>
            leia mais
            </TextMore> 
          </Footer>
        </Card03>
        <Card02>
          <UserWrapper>
            <UserPhoto source={{ uri: 'https://eu.ui-avatars.com/api/?name=K+M' }}/>
            <UserInfo>
              <UserName>Estatuto de Igualdade</UserName>
              <UserRole>Karoline Menezes</UserRole>
              <UserLocal>Porto, Portugal</UserLocal>
            </UserInfo>
            <Icon name={'bell-outline'} />
            <Icon name={'heart-outline'} />
          </UserWrapper>
          <Footer>
            <Text>
              Posso tirar o Estatuto com quanto tempo aqui?
            </Text>
          </Footer>
        </Card02>
      </Content>    
    </Container> 
  )
}    