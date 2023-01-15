import {type Dispatch, type SetStateAction, type ReactNode} from 'react';
import {type StyleProp, type ViewStyle} from 'react-native';
import type Animated from 'react-native-reanimated';

export type TabBottomContextProps = {
	styleAnimated: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
	toggleVisibleTab: (previewScrollY: number) => void;
	setCurrentScrollY: Dispatch<SetStateAction<number>>;
};

export type TabBottomProviderProps = {
	children: ReactNode;
};

// StyleAnimated: {transform: Array<Record<string, number>>};
