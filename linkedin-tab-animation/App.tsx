import React from 'react';
import {TabBottomProvider} from './src/hooks/useTabBottom';
import {Routes} from './src/routes';
import {useFonts} from 'expo-font';

import InterRegular from './src/assets/fonts/Inter-Regular.ttf';
import InterMedium from './src/assets/fonts/Inter-Medium.ttf';
import InterSemiBold from './src/assets/fonts/Inter-SemiBold.ttf';
import InterBlack from './src/assets/fonts/Inter-Black.ttf';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/styles/theme';
import {StatusBar} from 'react-native';

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
					barStyle='light-content'
					backgroundColor='transparent'
					translucent
				/>
				<Routes />
			</TabBottomProvider>
		</ThemeProvider>
	);
}

