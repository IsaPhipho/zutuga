import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(21)}px; 

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.main};
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(16)}px;
`;

export const BorderLine = styled.View`
  height: 2px;
`;

export const Body = styled.View`
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
`;

export const MessageBox = styled(TextInput)`
  width: 100%;
  height: 150px;

  align-items: center;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.text};
  
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary.main};
`;

export const MessageText = styled.Text`
  margin-top: 8px;
  margin-bottom: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Footer = styled.View`
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: ${RFValue(16)}px;
`;

export const View = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: ${RFValue(16)}px;
`;