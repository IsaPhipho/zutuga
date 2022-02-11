import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(112)}px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive }) => 
    isActive ? theme.colors.secondary.light : theme.colors.shape
  };
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;

  font-family: ${({ theme }) => theme.fonts.regular};
`;