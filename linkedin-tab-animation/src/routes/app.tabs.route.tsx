import React from 'react';

import * as Phosphor from 'phosphor-react-native';

import Animated from 'react-native-reanimated';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTabBottom} from '../hooks/useTabBottom';

import {Setting} from '../screens/Setting';
import {Home} from '../screens/Home';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

export function AppTabsRoutes() {
	const {styleAnimated} = useTabBottom();
	const theme = useTheme();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.gray,
				tabBarStyle: {position: 'absolute', bottom: 0},
			}}
			tabBar={props => (
				<Animated.View style={[styleAnimated]}>
					<BottomTabBar {...props} />
				</Animated.View>
			)}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: () => (
						<Phosphor.House color='#333' size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Setting'
				component={Setting}
				options={{
					tabBarIcon: () => (
						<Phosphor.Users color='#333' size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Post'
				component={Home}
				options={{
					tabBarIcon: () => (
						<Phosphor.PlusCircle color='#333' size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Notification'
				component={Home}
				options={{
					tabBarIcon: () => (
						<Phosphor.Bell color='#333' size={24} weight='fill' />
					),
				}}
			/>
			<Tab.Screen
				name='Jobs'
				component={Home}
				options={{
					tabBarIcon: () => (
						<Phosphor.Bag color='#333' size={24} weight='fill' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
