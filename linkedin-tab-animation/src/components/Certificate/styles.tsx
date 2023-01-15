import styled from 'styled-components/native';

export const ContainerCertificate = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InstitutionLogo = styled.Image`
  width: 45px;
  height: 45px;
`;

export const ContentCertificate = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.dark};
  font-size: 14px;
`;

export const Institution = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.dark};
  font-size: 14px;
`;

export const Date = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
`;
