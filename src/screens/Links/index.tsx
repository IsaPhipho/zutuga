import React from 'react';
import { Linking } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { ButtonLink } from '../../components/ButtonLink';

import { 
  Container, 
  Logo,
  Title,
  Header,
  BorderLine,
  Body,
} from './styles';

export function Links() {
  return (
    <Container>
      <Header>
        <Logo>zutuga</Logo>
        <Title> 
          Links úteis
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
 
        <ButtonLink 
          title="CNAIM"
          onPress={() => { 
            Linking.openURL('https://www.acm.gov.pt/inicio'); 
          }}
        />
        <ButtonLink 
          title="DGES"
          onPress={() => { 
            Linking.openURL('https://www.dges.gov.pt/pt'); 
          }}
        />
        <ButtonLink 
          title="Finanças"
          onPress={() => { 
            Linking.openURL('https://www.portaldasfinancas.gov.pt/at/html/index.html'); 
          }}
        />
        <ButtonLink 
          title="IEFP"
          onPress={() => { 
            Linking.openURL('https://www.iefp.pt/'); 
          }}
        />
        <ButtonLink 
          title="IMT"
          onPress={() => { 
            Linking.openURL('https://www.imt-ip.pt/sites/IMTT/Portugues/Paginas/IMTHome.aspx'); 
          }}
        />
        <ButtonLink 
          title="IRN"
          onPress={() => { 
            Linking.openURL('https://irn.justica.gov.pt/'); 
          }}
        />
        <ButtonLink 
          title="PSP"
          onPress={() => { 
            Linking.openURL('https://www.psp.pt/Pages/homePage.aspx'); 
          }}
        />
        <ButtonLink 
          title="Segurança Social"
          onPress={() => { 
            Linking.openURL('https://www.seg-social.pt/inicio'); 
          }}
        />
        <ButtonLink 
          title="SEF"
          onPress={() => { 
            Linking.openURL('https://www.sef.pt/pt/Pages/Homepage.aspx'); 
          }}
        />
        <ButtonLink 
          title="SNS"
          onPress={() => { 
            Linking.openURL('https://www.sns.gov.pt/'); 
          }}
        />
      </Body>  
    </Container>  
  )
}