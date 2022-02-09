import styled from "styled-components/native";
import { View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled(View)`
  flex-direction: row;
`;

export const LogoY = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.attention};

  margin-top: ${RFPercentage(4)}px;
`;

export const LogoG = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.success};

  margin-top: ${RFPercentage(4)}px;
`;

export const LogoR = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  color: ${({ theme }) => theme.colors.alertColor};

  margin-top: ${RFPercentage(4)}px;
`;