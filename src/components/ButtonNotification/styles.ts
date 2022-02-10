import styled  from 'styled-components/native'; 
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};

  margin-top: 16px; 
  margin-bottom: 32px; 
  height: 80px;

  padding: 16px;

  border: 1px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary.main};

  align-items: center;

  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.primary.dark};  
`;