import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const DOUBLE_SCREEN_HEIGHT = Dimensions.get('window').height * 2;

export const SpaceOcupe = styled.View`
  height: ${DOUBLE_SCREEN_HEIGHT}px;
  width: 100%;
`;

export const PageName = styled.Text`
  margin: 50px auto;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  font-size: 20px;
`;
