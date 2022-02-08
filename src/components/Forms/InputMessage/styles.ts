import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 58px 56px;

  margin-bottom: 16px;

  align-items: center;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.text};
  
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary.main};
`;