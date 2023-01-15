import styled from 'styled-components/native';

export const ContainerHome = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

export const ScrollHome = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.background};
`;

export const SkillsList = styled.FlatList``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.dark};
  font-size: 14px;
`;

export const Section = styled.View`
  padding-left: 24px;
  margin-top: 28px;
`;

export const Skills = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const AboutMe = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
  line-height: 17px;
  margin-top: 12px;
`;

export const Certificates = styled.View`
  margin-top: 16px;
`;
