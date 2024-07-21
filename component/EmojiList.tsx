import { useState } from 'react';
import {
	FlatList,
	Platform,
	Pressable,
	Image,
	StyleSheet,
	View,
} from 'react-native';

type PropsEmojiList = {
	onSelect: React.Dispatch<React.SetStateAction<number | null>>;
	onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: PropsEmojiList) => {
	// 追加する絵文字
	const [emoji] = useState<number[]>([
		require('../assets/images/emoji1.png'),
		require('../assets/images/emoji2.png'),
		require('../assets/images/emoji3.png'),
		require('../assets/images/emoji4.png'),
		require('../assets/images/emoji5.png'),
		require('../assets/images/emoji6.png'),
	]);

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={Platform.OS === 'web'}
			data={emoji}
			contentContainerStyle={styles.listContainer}
			renderItem={({ item, index }) => (
				<View style={{}}>
					<Pressable
						onPress={() => {
							onSelect(item);
							onCloseModal();
						}}>
						<Image source={item} key={index} style={styles.image} />
					</Pressable>
				</View>
			)}></FlatList>
	);
};

export default EmojiList;

const styles = StyleSheet.create({
	listContainer: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		paddingTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	image: {
		width: 100,
		height: 100,
		marginRight: 20,
	},
});
