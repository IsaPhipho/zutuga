import styled  from 'styled-components/native'; 
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};

  padding: 20px;

  border: 0.5px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary.main};

  align-items: center;
  margin-top: 12px;

  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.primary.dark};  
`;