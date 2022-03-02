import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
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

export const DoubtText = styled.Text`
  margin-top: ${RFValue(32)}px;
  margin-left: 32px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const TipText = styled.Text`
  margin-left: 32px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const CardView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  marginTop: 16,
  marginBottom: 32,
  contentContainerStyle: {paddingHorizontal: 12 },
})`
  
`;

export const Card02 = styled.View`
  margin-top: 24px;
  margin-left: 20px;
  width: 329px;
  height: 104px;
  
  background-color: ${({ theme }) => theme.colors.text};

  padding: 4px 4px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ theme }) => theme.colors.attention};
`;

export const Card03 = styled.View`
  margin-top: 24px;
  margin-left: 20px;

  width: 329px;
  height: 104px;
  
  background-color: ${({ theme }) => theme.colors.text};
 
  padding: 4px 4px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ theme }) => theme.colors.success};
`;

export const UserWrapper = styled.View`
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

export const TipTitle = styled.Text`
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

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 60px;
  margin-right: 32px;
  margin-top: 4px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.primary.main};  
`;

export const TextMore = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.secondary.main};

  margin-top: 18px;
`;

export const Icon = styled(
  MaterialCommunityIcons)`
  font-size: ${RFValue(16)}px;
  margin-left: 4px;
  margin-right: 8px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
`;
