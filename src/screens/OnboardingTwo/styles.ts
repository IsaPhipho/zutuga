import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const tileWallpaper = styled.View``;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px; 
  margin-top: ${RFPercentage(16)}px;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export const Logo = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.primary.main};

  margin-left: 32px;
`;

export const IconCommunity = styled.View`
  margin-left: 32px;
  margin-top: ${RFPercentage(8)}px;
  margin-bottom: ${RFPercentage(12)}px;
`;

export const Body = styled.View``;

export const ObOneText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.light};

  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-left: 32px;
  margin-right: 32px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 32px;
  margin-top: ${RFPercentage(20)}px;
`;

export const IconNext = styled(Feather)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.primary.light};
`;