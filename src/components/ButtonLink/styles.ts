import styled  from 'styled-components/native'; 
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(RectButton)`
  width: 48%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.text};

  padding: 16px;

  /* border: 1px solid; */
  border-radius: 5px;
  /* border-color: ${({ theme }) => theme.colors.primary.main}; */
  border-left-color: ${({ theme }) => theme.colors.success};

  align-items: center;
  margin-top: 12px;

  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.dark};  
`;