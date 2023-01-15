import React from 'react';
import * as S from './styles';

export function Header() {
	return (
		<S.ContainerHeader>
			<S.BackgroundWrapper>
				<S.BackgroundImage source={{uri: 'https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Featured-Image.png'}} />
				<S.ProfileImage source={{uri: 'https://i.ibb.co/Ht1Qt9b/Captura-de-tela-de-2023-01-15-10-21-47.png'}} />
			</S.BackgroundWrapper>
			<S.ProfileInfo>
				<S.ProfileName>José Murillo</S.ProfileName>
				<S.ProfileBio>Desenvolvedor Front-end | Graduando em ciência da computação</S.ProfileBio>
				<S.ProfileConnections>360 conexões</S.ProfileConnections>
				<S.SeparatorInfo />
				<S.ProfileDescription>
          Eai, eu sou Murillo e a alguns anos minha vida é entrelaçada no mundo do desenvolvimento, e como sempre foi algo que me proporcionou realizações, quero passar algumas dicas valiosas para vocês quando eu puder!
				</S.ProfileDescription>
			</S.ProfileInfo>
		</S.ContainerHeader>
	);
}
