import styled from "styled-components/native";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(View)`
  flex-direction: column;
  margin-top: 136px
  align-items: center;
`;

export const Icon = styled(
  MaterialCommunityIcons)`
  font-size: ${RFValue(80)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Message = styled.Text`
  margin-top: 32px;
  margin-bottom: ${RFValue(64)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.primary.main};
`;