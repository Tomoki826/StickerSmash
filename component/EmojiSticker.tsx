import { View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type PropsEmojiSticker = {
	imageSize: number;
	stickerSource: any;
};

const EmojiSticker = ({ imageSize, stickerSource }: PropsEmojiSticker) => {
	const scaleImage = useSharedValue(imageSize);

	// ダブルタップで拡大操作
	const doubleTap = Gesture.Tap()
		.numberOfTaps(2)
		.onStart(() => {
			if (scaleImage.value !== imageSize * 2) {
				scaleImage.value = imageSize * 2;
			} else if (scaleImage.value === imageSize * 2) {
				scaleImage.value = imageSize;
			}
		});

	const imageStyle = useAnimatedStyle(() => {
		return {
			width: withSpring(scaleImage.value),
			height: withSpring(scaleImage.value),
		};
	});

	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	// ドラッグで移動
	const drag = Gesture.Pan().onChange((event) => {
		translateX.value += event.changeX;
		translateY.value += event.changeY;
	});

	const containerStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateX.value,
				},
				{
					translateY: translateY.value,
				},
			],
		};
	});

	return (
		<GestureDetector gesture={drag}>
			<Animated.View style={[containerStyle, { top: -350 }]}>
				<GestureDetector gesture={doubleTap}>
					<Animated.Image
						source={stickerSource}
						resizeMode="contain"
						style={imageStyle}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	);
};

// , { width: imageSize, height: imageSize } をanimate.imageにいる？

export default EmojiSticker;
