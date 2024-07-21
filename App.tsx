import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, ImageRequireSource } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from './component/Button';
import ImageViewer from './component/ImageViewer';

const PlaceholderImage: ImageRequireSource = require('./assets/images/background-image.png');

type ImagePathType = string | null;

const App = () => {
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

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

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					placeholderImageSource={PlaceholderImage}
					selectedImage={selectedImage}
				/>
				<StatusBar style="auto" />
			</View>
			{showAppOptions ? (
				<View />
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
		</View>
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
		paddingTop: 58,
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
});
