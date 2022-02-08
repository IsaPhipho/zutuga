import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.text};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 16px 32px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary.main};

`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary.main};
`;