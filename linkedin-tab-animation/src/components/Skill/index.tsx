import React from 'react';
import * as S from './styles';
import {type SkillProps} from './types';

export function Skill({name}: SkillProps) {
	return (
		<S.ContainerSkill>
			<S.Name>{name}</S.Name>
		</S.ContainerSkill>
	);
}
