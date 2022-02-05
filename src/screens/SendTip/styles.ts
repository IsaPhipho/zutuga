import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(32)}px;
`;

export const BorderLine = styled.View`
  height: 2px;
`;

export const Body = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: ${RFValue(16)}px;
`;

export const BodyText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 24px;
`;

export const Footer = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: ${RFValue(8)}px;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};

  margin-top: ${RFValue(24)}px;
  margin-bottom: 8px;
`;





