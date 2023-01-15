import React, {
	useState,
	createContext,
	useContext,
	useCallback,
} from 'react';
import {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

import {type TabBottomContextProps, type TabBottomProviderProps} from './@types/useTabBottom';

const TabBottomContext = createContext<TabBottomContextProps>(
	{} as TabBottomContextProps,
);

function TabBottomProvider({children}: TabBottomProviderProps) {
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const animationTranslateY = useSharedValue(0);

	const styleAnimated = useAnimatedStyle(() => ({
		transform: [
			{translateY: withTiming(animationTranslateY.value)},
		],
	}));

	const toggleVisibleTab = useCallback((previewScrollY: number) => {
		if (previewScrollY >= currentScrollY) {
			animationTranslateY.value = 100;
			setCurrentScrollY(previewScrollY);

			return;
		}

		animationTranslateY.value = 0;
		setCurrentScrollY(previewScrollY);
	}, [animationTranslateY, currentScrollY]);

	return (
		<TabBottomContext.Provider value={{
			toggleVisibleTab,
			styleAnimated,
			setCurrentScrollY,
		}}
		>
			{children}
		</TabBottomContext.Provider>
	);
}

function useTabBottom(): TabBottomContextProps {
	const context = useContext(TabBottomContext);

	return context;
}

export {TabBottomProvider, useTabBottom};
