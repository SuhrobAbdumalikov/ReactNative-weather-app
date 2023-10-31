import * as Location from "expo-location";
import { Alert, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import axios from "axios";

const Api_key = "96b947a45d33d7dc1c49af3203966408";

export default function App() {
  const [isloading, setIsloading] = useState(false);
  const [location, setlocation] = useState({});

  //get weather=============>>
  const getWeather = async (latitude, longitude) => {
    setIsloading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api_key}&units=metric`
    );
    setlocation(data);
    setIsloading(false);
  };

  //set weather=============>>
  const setWeather = async (city) => {
    setIsloading(true);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    );
    setlocation(data);
    setIsloading(false);
  };

  //get current location==========>>
  const currentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(" Request permission location was denied!");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("I can`t find your location! Sorry :(");
      return;
    }
  };

  useEffect(() => {
    currentLocation();
  }, []);

  console.log(location);

  return isloading ? (
    <Loader />
  ) : location.id ? (
    <Weather
      setWeather={setWeather}
      weatherTemp={Math.floor(location.main.temp)}
      weatherCondition={location.weather[0].main}
      cityName={location.name}
      country={location.sys.country}
    />
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({});
