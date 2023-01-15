import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  min-height: 200px;
`;

export const BackgroundWrapper = styled.View`
  position: relative;
  height: 111px;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProfileImage = styled.Image`
  position: absolute;
  left: 24px;
  bottom: -40px;
  width: 81px;
  height: 81px;
  border-radius: 40px;
  border: 2px solid white;
`;

export const ProfileInfo = styled.View`
  margin: 45px 24px 0px 24px;
 `;

export const SeparatorInfo = styled.View`
  width: 100%;
  height: 1px;
  background-color: #F7F7F7;
`;

export const ProfileName = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.dark};
  font-size: 16px;
`;

export const ProfileBio = styled.Text`
  font-family: 'InterRegular';
  font-size: 12px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export const ProfileConnections = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 12px;
  margin-top: 15px;
  font-size: 12px;
`;

export const ProfileDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray};
  line-height: 18px;
  margin-top: 15px;
  font-size: 12px;
`;
