import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export const weatherConditions = {
  Clear: {
    icon: "weather-sunny",
    colorGradient: ["#4ea1ff", "#0d6eecfc"],
    title: "Sunny Day",
    description: "You should go for a walk :)",
    iconColor: "white",
  },
  ThunderStorm: {
    icon: "weather-lighting",
    colorGradient: ["#141e30", "#243b55"],
    title: "Thundery day",
    description: "Sit at Home Please!",
    iconColor: "white",
  },
  Drizzle: {
    icon: "weather-rainy",
    colorGradient: ["#3a7bd5", "#3a6073"],
    title: "Rainy Day",
    description: "Take un Umbrella",
    iconColor: "white",
  },
  Rain: {
    icon: "weather-pouring",
    colorGradient: ["#000046", "#1cb5e0"],
    title: "It's raining outside",
    description: "Maybe, the rain will rise soon!",
    iconColor: "white",
  },
  Haze: {
    icon: "weather-hazy",
    colorGradient: ["#3e5151", "#decba4"],
    title: "Foggy Day",
    description: "Please Be Careful!",
    iconColor: "white",
  },
  Snow: {
    icon: "snowflake",
    colorGradient: ["#83a4d4", "#b6fbff"],
    title: "Snowing Day",
    description: "There is a snow outside",
    iconColor: "white",
  },
  Dust: {
    icon: "weather-windy-variant",
    colorGradient: ["#b79891", "#94716b"],
    title: "Dusty day",
    description: "You should not go outside!",
    iconColor: "white",
  },
  Smoke: {
    icon: "weather-windy",
    colorGradient: ["#56ccf2", "#2f80ed"],
    title: "Smoky Day",
    description: "You should go for a walk :)",
    iconColor: "white",
  },
  Mist: {
    icon: "weather-fog",
    colorGradient: ["#606c88", "#3f4c6b"],
    title: "Foggy Day",
    description: "Don't go outside!",
    iconColor: "white",
  },
  Clouds: {
    icon: "weather-cloudy",
    colorGradient: ["#757f9a", "#d7dde8"],
    title: "Cloudy Day",
    description: "if you want, you can go outside",
    iconColor: "white",
  },
};

function Weather({
  weatherTemp,
  cityName,
  weatherCondition,
  country,
  setWeather,
}) {
  const [val, setVal] = useState("");

  return (
    <LinearGradient
      style={styles.weatherContainer}
      colors={weatherConditions[weatherCondition].colorGradient}
      // colors={["red", "blue"]}
    >
      <Image
        source={require("../assets/backgroundImg.webp")}
        style={styles.mainImg}
        blurRadius={5}
      />
      <StatusBar style="light" />
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={weatherConditions[weatherCondition].icon}
          size={90}
          style={{ color: weatherConditions[weatherCondition].iconColor }}
        />
        <View style={styles.nameFlex}>
          <Text style={styles.temp}>{weatherTemp}C° </Text>
          <Text style={styles.cityName}>
            {cityName} | {country}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.weatherContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {weatherConditions[weatherCondition].title}
        </Text>
        <Text style={styles.description}>
          {weatherConditions[weatherCondition].description}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search..."
            value={val}
            onChangeText={(e) => setVal(e)}
            style={styles.mainInput}
          />
          <TouchableOpacity
            title="Search"
            onPress={() => setWeather(val)}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  weatherContainer: {
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  cityName: {
    fontSize: 26,
    color: "white",
  },
  nameFlex: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginTop: 10,
  },
  description: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#04338a40",
    color: "white",
    width: 50,
    height: 40,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  btnText: {
    color: "white",
  },
  mainInput: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
});

export default Weather;
