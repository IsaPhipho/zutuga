import styled  from 'styled-components/native'; 
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};

  margin-top: 16px; 
  margin-bottom: 32px; 
  height: 88px;

  padding: 16px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.text};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};  
`;

export const IconNext = styled(Feather)`
  margin-top: 40px;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary.main};
`;