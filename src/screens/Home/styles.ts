import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Header = styled.View`
  margin-top: ${RFPercentage(8)}px;
  margin-right: 32px;
  align-items: flex-end;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${RFValue(40)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 16px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.secondary.main};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Body = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: ${RFValue(16)}px;
`;

export const BodyText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(24)}px;
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

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(24)}px;
  margin-bottom: 8px;
`;

export const SectionType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;
`;





