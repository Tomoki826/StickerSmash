import {
	StyleSheet,
	Image,
	ImageURISource,
	ImageRequireSource,
} from 'react-native';

type PlaceholderImageSource = {
	placeholderImageSource: ImageRequireSource;
	selectedImage: string | null | undefined;
};

const ImageViewer = ({
	placeholderImageSource,
	selectedImage,
}: PlaceholderImageSource) => {
	// imageSourceはImageURISource型の変数

	// selectedImageが文字列ならば、
	// ImageURISourceのuriプロパティをselectedImageに変更
	// selectedImageがnullやundefinedならば、
	// placeholderImageSourceのImageURISourceオブジェクトを代入
	const imageSource: ImageURISource | ImageRequireSource = selectedImage
		? { uri: selectedImage }
		: placeholderImageSource;

	return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});

export default ImageViewer;
