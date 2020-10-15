import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import HeaderOne from "./HeaderOne";
import logo from "../assets/images/a01d.png";
import speed from "../assets/images/speed.png";
import presh from "../assets/images/presh.png";
import humid from "../assets/images/humid.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const WeatherTemplate = (props) => {
  const {
    location,
    country,
    temperature,
    description,
    date_time,
    sunrise,
    sunset,
    wind_speed,
    pressure,
    humidity,
    timezone,
    city,
    longitude,
    latitude,
  } = props.currentData;
  let [fontsLoaded, error] = useFonts({
    Regular: Quicksand_400Regular,
    ExtraBold: Quicksand_700Bold,
    Medium: Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <HeaderOne />
      <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
        <View style={{ flex: 6 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 30, color: "#fff" }}>
            {location},
          </Text>
          <Text style={{ fontFamily: "ExtraBold", fontSize: 40 , color: "#fff"}}>
            {country}
          </Text>
          <Text style={{ fontFamily: "Medium", fontSize: 17, color: "#ccc", marginBottom: 10 }}>
            {date_time}
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <Text
            style={{ fontFamily: "Medium", fontSize: 17, marginBottom: 5, color: "#ccc" }}
          >
            {timezone}
          </Text>
          <Text
            style={{ fontFamily: "Medium", fontSize: 17, marginBottom: 5, color: "#ccc" }}
          >
            {city}
          </Text>
          <Text
            style={{ fontFamily: "Medium", fontSize: 17, marginBottom: 5, color: "#ccc" }}
          >
            Lat: {latitude}
          </Text>
          <Text
            style={{ fontFamily: "Medium", fontSize: 17, marginBottom: 5, color: "#ccc" }}
          >
            Lon: {longitude}
          </Text>
        </View>
      </View>
      {/* **************Weather Card *****************/}
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#AECDFF", "#5896FD"]}
          style={{ borderRadius: 20, height: 170, elevation: 20 }}
        >
          <View
            style={{
              flex: 10,
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <View style={{ flex: 6 }}>
              <Image source={logo} />
              <Text
                numberOfLines={1}
                style={{ fontFamily: "ExtraBold", color: "#fff", fontSize: 23 }}
              >
                {description}
              </Text>
            </View>
            <View style={{ flex: 4, justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "ExtraBold",
                    color: "#fff",
                    fontSize: 50,
                  }}
                >
                  {temperature}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "ExtraBold",
                    fontSize: 16,
                  }}
                >
                  ˚C
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: "Medium",
                  color: "#fff",
                  fontSize: 16,
                  marginTop: 20,
                }}
              >
                Sunrise: {sunrise}
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  color: "#fff",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                Sunset: {sunset}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      {/* ************** ThreeDOTs *****************/}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 40,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontFamily: "ExtraBold", fontSize: 15, color: "#fff" }}>
            Humidity
          </Text>
          <Image
            source={humid}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ccc",
              borderRadius: 10,
              marginVertical: 5,
            }}
          />
          <Text style={{ fontFamily: "Medium", fontSize: 16, color: "#fff" }}>
            {humidity}%
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontFamily: "ExtraBold", fontSize: 15, color: "#fff" }}>
            Wind Speed
          </Text>
          <Image
            source={speed}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ccc",
              borderRadius: 10,
              marginVertical: 5,
            }}
          />
          <Text style={{ fontFamily: "Medium", fontSize: 16, color: "#fff" }}>
            {wind_speed}km/h
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontFamily: "ExtraBold", fontSize: 15, color: "#fff" }}>
            Pressure
          </Text>
          <Image
            source={presh}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ccc",
              borderRadius: 10,
              marginVertical: 5,
            }}
          />
          <Text style={{ fontFamily: "Medium", fontSize: 16, color: "#fff" }}>{pressure}</Text>
        </View>
      </View>

      {/* ************** ForeCast header *****************/}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "ExtraBold",
                fontSize: 20,
                color: "#5896Fd",
              }}
            >
              Next 7 Days
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ************** ForeCast Body *****************/}
      <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
        <LinearGradient
          colors={["#B0A4FF", "#806EF8"]}
          style={{
            borderRadius: 50,
            height: 120,
            elevation: 50,
            width: 70,
            alignItems: "center",
          }}
        >
          <Image
            source={presh}
            style={{ height: 50, width: 50, marginTop: 5 }}
          />
          <Text
            style={{
              fontFamily: "ExtraBold",
              color: "#fff",
              marginBottom: 5,
              fontSize: 18,
            }}
          >
            30˚c
          </Text>

          <Text
            style={{ fontFamily: "ExtraBold", color: "#fff", marginBottom: 5 }}
          >
            Mon
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default WeatherTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D26",
  },
});
