import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 12px 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.shape};
  border: 1px solid;
  border-radius: 10px;

  margin-bottom: 8px;
`;