import React, {useCallback} from 'react';
import {
	type NativeScrollEvent,
	type NativeSyntheticEvent,
	ScrollView, Text,
} from 'react-native';
import {useTabBottom} from '../../hooks/useTabBottom';
import * as S from './styles';

export function Notification() {
	const {toggleVisibleTab} = useTabBottom();

	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		toggleVisibleTab(event.nativeEvent.contentOffset.y);
	}, [toggleVisibleTab]);

	return (
		<ScrollView onScroll={onScroll}>
			<S.SpaceOcupe>
				<S.PageName>Notification</S.PageName>
			</S.SpaceOcupe>
		</ScrollView>
	);
}
