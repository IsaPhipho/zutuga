import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape}; 

  font-size: ${RFValue(56)}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;