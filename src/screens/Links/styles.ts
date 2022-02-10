import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(21)}px; 

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.main};
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(16)}px;
`;

export const BorderLine = styled.View`
  height: 2px;
`;

export const Content = styled.ScrollView`
  margin-bottom: 8px;
`;

export const Body = styled.View`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const FirstSectionLink = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const SecondSectionLink = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const ThirdSectionLink = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const FourthSectionLink = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const FifthSectionLink = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;