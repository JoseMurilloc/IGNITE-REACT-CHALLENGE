import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {useFonts} from 'expo-font';

import InterRegular from './src/assets/fonts/Inter-Regular.ttf';
import InterMedium from './src/assets/fonts/Inter-Medium.ttf';
import InterSemiBold from './src/assets/fonts/Inter-SemiBold.ttf';
import InterBlack from './src/assets/fonts/Inter-Black.ttf';

import {Routes} from './src/routes';
import {theme} from './src/styles/theme';
import {TabBottomProvider} from './src/hooks/useTabBottom';

export default function App() {
	const [fontsLoaded] = useFonts({
		InterRegular,
		InterMedium,
		InterSemiBold,
		InterBlack,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<TabBottomProvider>
				<StatusBar
					barStyle='dark-content'
					backgroundColor='transparent'
					translucent
				/>
				<Routes />
			</TabBottomProvider>
		</ThemeProvider>
	);
}

