import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px; 
  margin-top: ${RFPercentage(16)}px;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export const Logo = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.primary.main};

  margin-left: 32px;
`;

export const IconQuestion = styled.View`
  margin-left: 32px;
  margin-top: ${RFPercentage(8)}px;
  margin-bottom: ${RFPercentage(12)}px;
`;

export const Body = styled.View`
  margin-left: 32px;
  margin-right: 32px;
`;

export const ObOneText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Footer = styled.View`
  height: ${RFValue(45)}px;

  margin-top: ${RFValue(112)}px;
  margin-right: 32px;
  margin-left: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const View = styled.View`
  padding-left: 10px;
  flex-direction: row;
  
`;

export const FirstCircle = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  width: 5;
  height: 5;
  border-radius: 2px;
`;

export const SecondCircle = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 5;
  height: 5;
  border-radius: 2px;
  margin-left: 16px;
`;


export const IconNext = styled(Feather)`
  margin-left: ${RFValue(32)}px;
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text};
`;