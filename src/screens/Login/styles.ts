import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(32)}px;
`;

export const BorderLine = styled.View`
  height: 2px;
`;

export const Form = styled.View`

  padding: 32px;
`; 

export const FormText = styled.Text`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const ForgotText = styled.Text`
  font-size: ${RFValue(12)}px;

  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const LinkText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.secondary.main};

  margin-left: 16px;
`;

export const Fields = styled.View``;

export const Footer = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: ${RFValue(72)}px;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};

  margin-bottom: ${RFValue(8)}px;

`;

