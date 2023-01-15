import React, {useCallback, useState} from 'react';
import {
	type NativeScrollEvent,
	type NativeSyntheticEvent,
} from 'react-native';
import {type Skill as SkillType} from './types';

import {Header, Skill, Certificate} from '../../components';

import {skills as skillsMocked} from '../../utils/skills';

import {useTabBottom} from '../../hooks/useTabBottom';
import * as S from './styles';

export function Home() {
	const {toggleVisibleTab} = useTabBottom();
	const [skills, setSkills] = useState<SkillType[]>(skillsMocked);

	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		toggleVisibleTab(event.nativeEvent.contentOffset.y);
	}, [toggleVisibleTab]);

	return (
		<S.ContainerHome>
			<S.ScrollHome onScroll={onScroll}>
				<Header />
				<S.Section>
					<S.Title>Competências</S.Title>
					<S.Skills>
						<Skill name='Typescript' />
						<Skill name='Redux' />
						<Skill name='React Native' />
						<Skill name='Git' />
					</S.Skills>
				</S.Section>
				<S.Section>
					<S.Title>Sobre</S.Title>
					<S.AboutMe>
            👋 Olá, meu nome é José Murillo tenho 24 anos, atualmente estou graduando em
            Ciência da Computação e trabalhando como desenvolvedor Front-End Júnior.{'\n\n'}

            No meu dia a dia como desenvolvedor sempre busco presar o seguimento de padrões
            e código limpo em busca de implementar as melhores telas possíveis tendo sempre em mente
            o usuário e seus casos de uso.{'\n\n'}

            A partir disso utilizo das minhas habilidades em javascript/typescript para construir as
            melhores interfaces, tendo como base os estudos e práticas recorrentes com as seguintes tecnologias:{'\n\n'}
            - ReactJs {'\n'}
            - React Native
						{'\n\n'}
            Para ver um pouco do que eu já fiz/produzi no mundo do desenvolvimento, convido você ir da uma olhada
            no meu GitHub. https://github.com/JoseMurilloc
					</S.AboutMe>
				</S.Section>
				<S.Section>
					<S.Title>Licenças e certificados</S.Title>
					<S.Certificates>
						<Certificate
							title='Trilha ReactJS'
							educationalInstitution='Rocketseat'
							dateEmit='Verificação emitida em jun de 2021'
							image='https://avatars.githubusercontent.com/u/28929274?s=280&v=4'
						/>
						<Certificate
							title='Trilha ReactJS'
							educationalInstitution='Rocketseat'
							dateEmit='Verificação emitida em jun de 2021'
							image='https://avatars.githubusercontent.com/u/28929274?s=280&v=4'
						/>
						<Certificate
							title='Trilha ReactJS'
							educationalInstitution='Rocketseat'
							dateEmit='Verificação emitida em jun de 2021'
							image='https://avatars.githubusercontent.com/u/28929274?s=280&v=4'
						/>
					</S.Certificates>
				</S.Section>
			</S.ScrollHome>
		</S.ContainerHome>
	);
}
