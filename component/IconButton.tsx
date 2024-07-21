import {
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type PropsIconButton = {
	icon: any; // これを "key" | "article" | "code" | ... | undefined にしたい -> どこから取得すればいい？
	label: string;
	onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({ icon, label, onPress }: PropsIconButton) => {
	return (
		<Pressable style={styles.iconButton} onPress={onPress}>
			<MaterialIcons name={icon} size={24} color="#fff" />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	iconButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconButtonLabel: {
		color: '#fff',
		marginTop: 12,
	},
});
