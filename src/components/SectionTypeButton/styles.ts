import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native'; 
import { Feather } from '@expo/vector-icons';
// import { RectButton } from 'react-native-gesture-handler';
// 
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'question' | 'tip';
}

interface ContainerProps {
  isActive: boolean;
  type: 'question' | 'tip';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 10px;
  

  padding: 24px; 

  ${({ isActive, type }) => isActive && type === 'question' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};

  ${({ isActive, type }) => isActive && type === 'tip' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.secondary.main}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary.main}
`;