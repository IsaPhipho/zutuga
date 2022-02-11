import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'question' | 'tip' | 'listQuestion' | 'listTip';
}

interface ContainerProps {
  isActive: boolean;
  type: 'question' | 'tip' | 'listQuestion' | 'listTip';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  height: 96px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.text};

  ${({ isActive, type }) => isActive && type === 'question' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};

  ${({ isActive, type }) => isActive && type === 'tip' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};

  ${({ isActive, type }) => isActive && type === 'listQuestion' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};

  ${({ isActive, type }) => isActive && type === 'listTip' && css`
    background-color: ${({ theme }) => theme.colors.secondary.light};
  `};
`;

export const Button = styled(RectButton)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 16px;
`;

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary.main};
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary.main};
`;