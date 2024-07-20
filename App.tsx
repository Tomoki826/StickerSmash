import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

const PlaceholderImage = require("./assets/images/background-image.png");

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});
