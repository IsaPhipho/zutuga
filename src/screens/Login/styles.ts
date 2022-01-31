import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px; 
  margin-top: ${RFPercentage(4)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export const Logo = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};

  margin-left: 32px;
  margin-top: ${RFValue(32)}px;
`;

export const Form = styled.View`
  justify-content: space-between;

  padding: 32px;
`; 

export const FormText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};
`;

export const LinkText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.secondary.main};
`;

export const Fields = styled.View``;

export const Footer = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: ${RFValue(24)}px;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: ${RFValue(16)}px;

`;

