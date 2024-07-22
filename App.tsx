import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Image,
	View,
	ImageRequireSource,
	SafeAreaView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Button from './component/Button';
import ImageViewer from './component/ImageViewer';
import IconButton from './component/IconButton';
import CircleButton from './component/CircleButton';
import EmojiPicker from './component/EmojiPicker';
import EmojiList from './component/EmojiList';
import EmojiSticker from './component/EmojiSticker';

const PlaceholderImage: ImageRequireSource = require('./assets/images/background-image.png');

type ImagePathType = string | null;

const App = () => {
	// 画像を一枚選択
	// Stateの変数型を<>で指定
	const [selectedImage, setSelectedImage] = useState<ImagePathType>(null);

	// 画像を取得
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});
		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert('You did not select any image.');
		}
	};

	// 選択オプション表示するか
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

	// 三つのボタン
	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onSaveImageAsync = async () => {};

	// モーダルの表示オプション
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	// どんな絵文字を選択するか？
	const [pickedEmoji, setPickedEmoji] = useState<number | null>(null);

	return (
		<GestureHandlerRootView>
			<StatusBar style="inverted" />
			<SafeAreaView style={styles.container}>
				<View style={styles.imageContainer}>
					<ImageViewer
						placeholderImageSource={PlaceholderImage}
						selectedImage={selectedImage}
					/>
					{pickedEmoji && (
						<EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
					)}
				</View>
				<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
					<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
				</EmojiPicker>
				{showAppOptions ? (
					<View style={styles.footerContainer}>
						<View style={styles.optionsRow}>
							<IconButton icon="refresh" label="Reset" onPress={onReset} />
							<CircleButton onPress={onAddSticker} />
							<IconButton
								icon="save-alt"
								label="Save"
								onPress={onSaveImageAsync}
							/>
						</View>
					</View>
				) : (
					<View style={styles.footerContainer}>
						<Button
							theme="primary"
							label="Choose a photo"
							onPress={pickImageAsync}
						/>
						<Button
							label="Use this photo"
							onPress={() => setShowAppOptions(true)}
						/>
					</View>
				)}
			</SafeAreaView>
		</GestureHandlerRootView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 3,
		paddingTop: 40,
	},
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
	footerContainer: {
		flex: 1,
		alignItems: 'center',
	},
	optionsContainer: {
		//		position: 'absolute',
		//		bottom: 80,
	},
	optionsRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});
