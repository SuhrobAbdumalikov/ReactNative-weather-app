import { StyleSheet, Text, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

function Loader() {
  return (
    <View style={styles.loadingContent}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgb(0,0,0)"
        source={require("../assets/loader.json")}
        animationStyle={styles.Lottie}
        speed={1}
      ></AnimatedLoader>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Lottie: {
    width: 150,
    height: 150,
  },
  loadingText: {
    marginTop: "-15%",
    color: "green",
  },
});

export default Loader;
