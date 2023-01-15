import React from 'react';
import * as S from './styles';
import {type CertificateProps} from './types';

export function Certificate({
	image,
	title,
	dateEmit,
	educationalInstitution,
}: CertificateProps) {
	return (
		<S.ContainerCertificate>
			<S.InstitutionLogo source={{uri: image}} />
			<S.ContentCertificate>
				<S.Title>{title}</S.Title>
				<S.Institution>{educationalInstitution}</S.Institution>
				<S.Date>{dateEmit}</S.Date>
			</S.ContentCertificate>
		</S.ContainerCertificate>
	);
}
