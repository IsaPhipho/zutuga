import styled, { css } from 'styled-components/native'; 
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.text};

  padding: 24px;

  border: 1px solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.primary.dark};

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