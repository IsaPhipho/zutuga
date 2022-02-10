import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

export const Card = styled.View`
  margin-top: 8px;
  height: 152px;
  
  background-color: ${({ theme }) => theme.colors.text};
 
  padding: 4px 4px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ theme }) => theme.colors.success};
`;

export const UserWrapper = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const UserInfo = styled.View`
  width: ${RFValue(160)}px;
  flex-direction: column;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const UserRole = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const UserLocal = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const FooterCard = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 60px;
  margin-right: 32px;
  margin-top: 4px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.primary.main};  
`;

export const IconCard = styled(
  MaterialCommunityIcons)`
  font-size: ${RFValue(16)}px;
  margin-left: 4px;
  margin-right: 8px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const MessageBox = styled(TextInput)`
  width: 100%;
  height: 200px;

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

export const Content = styled.ScrollView``;

export const Footer = styled.View`
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: ${RFValue(24)}px;
`;

