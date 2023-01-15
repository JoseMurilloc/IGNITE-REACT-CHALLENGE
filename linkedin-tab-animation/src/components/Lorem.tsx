import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Lorem: React.FC = () => (
	<View style={styles.container}>
		{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map(() => (
			<>
				<Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur doloremque aliquid mollitia modi odit incidunt quaerat repellendus necessitatibus reprehenderit excepturi iusto corrupti. Labore ipsam, pariatur velit porro error mollitia.</Text>
				<Text>...........</Text>
			</>
		))}
	</View>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	text: {
		fontSize: 16,
		color: '#333',
	},
});
