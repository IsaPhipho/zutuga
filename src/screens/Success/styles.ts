import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
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

export const Footer = styled.View`
  margin-top: 32px;
  margin-right: 32px;
  margin-left: 32px;
`;
