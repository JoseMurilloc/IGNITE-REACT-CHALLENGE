import styled from 'styled-components/native';

export const ContainerSkill = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  padding: 8px 16px;
  margin-right: 5px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.secondary};
  font-size: 12px;
`;
