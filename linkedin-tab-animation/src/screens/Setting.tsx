import React, {useCallback} from 'react';
import {
	type NativeScrollEvent,
	type NativeSyntheticEvent,
	ScrollView, StatusBar, Text,
} from 'react-native';
import {Lorem} from '../components/Lorem';
import {useTabBottom} from '../hooks/useTabBottom';

export function Setting() {
	const {toggleVisibleTab} = useTabBottom();

	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		toggleVisibleTab(event.nativeEvent.contentOffset.y);
	}, [toggleVisibleTab]);

	return (
		<>
			<StatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent
			/>

			<ScrollView onScroll={onScroll}>
				<Text>Setting</Text>
				<Lorem />
			</ScrollView>
		</>
	);
}
