import styled from 'styled-components/native'; 
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};

  border-radius: 5px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 18px;

  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.dark};  
`;