import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabsRoutes} from './app.tabs.route';

export function Routes() {
	return (
		<NavigationContainer>
			<AppTabsRoutes />
		</NavigationContainer>
	);
}
