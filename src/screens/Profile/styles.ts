import styled from 'styled-components/native';
import { TextInput } from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(21)}px; 
  margin-top: ${RFPercentage(4)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.main};
  
`;

export const Logo = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(32)}px;
`;

export const BorderLine = styled.View`
  height: 2px;
`;

export const UserWrapper = styled.View`
  margin-top: ${RFValue(16)}px;
  margin-left: 32px;
  margin-right: 32px;

  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const IconEdit = styled(Feather)`
  font-size: ${RFValue(16)}px;
  margin-left: 8px;
`; 

export const User = styled.View`
  margin-left: 24px;
`; 

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.secondary.main};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-right: 32px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`; 

export const Fields = styled.View`
  margin-left: 32px;
  margin-right: 32px;
`;

export const Footer = styled.View`
  margin-left: 32px;
  margin-right: 32px;
`;

export const InputText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};

  margin-bottom: ${RFValue(8)}px;
`;

export const InputForm = styled(TextInput)`
  width: 100%;
  padding: 48px 56px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid;
  border-radius: 10px;
`;