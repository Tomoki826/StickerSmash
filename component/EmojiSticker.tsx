import { View, Image } from 'react-native';

type PropsEmojiSticker = {
	imageSize: number;
	stickerSource: any;
};

const EmojiSticker = ({ imageSize, stickerSource }: PropsEmojiSticker) => {
	return (
		<View style={{ top: -350 }}>
			<Image
				source={stickerSource}
				resizeMode="contain"
				style={{ width: imageSize, height: imageSize }}
			/>
		</View>
	);
};

export default EmojiSticker;
