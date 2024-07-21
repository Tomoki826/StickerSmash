import { Modal, Pressable, View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type PropsEmojiPicker = {
	isVisible: boolean;
	children?: any;
	onClose: () => void;
};

const EmojiPicker = ({ isVisible, children, onClose }: PropsEmojiPicker) => {
	return (
		<Modal animationType="slide" transparent={true} visible={isVisible}>
			<View style={styles.modalContent}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Choose a sticker</Text>
					<Pressable onPress={onClose}>
						<MaterialIcons name="close" color="#fff" size={22} />
					</Pressable>
				</View>
				{children}
			</View>
		</Modal>
	);
};

export default EmojiPicker;

const styles = StyleSheet.create({
	modalContent: {
		height: '30%',
		width: '100%',
		backgroundColor: '#464C55',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: 'absolute',
		bottom: 0,
	},
	titleContainer: {
		height: '20%',
		backgroundColor: '#464C55',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: '#fff',
		fontSize: 16,
	},
});
