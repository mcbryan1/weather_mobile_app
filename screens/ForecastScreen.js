import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import presh from "../assets/images/presh.png";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";


const ForecastScreen = (props) => {
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
      <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
        {/**************************** * Day One ***************************/}
        <LinearGradient
          colors={["#B0A4FF", "#806EF8"]}
          style={{
            borderRadius: 20,
            height: 120,
            elevation: 50,
            width: 110,
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
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
                marginTop: 5,
                fontSize: 25,
              }}
            >
              30˚c
            </Text>
          </View>

          <Text
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 0 }}
          >
            25 - 55 - 5555
          </Text>
          <Text
            numberOfLines={1}
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 5 }}
          >
            Broken clouds
          </Text>
        </LinearGradient>

        {/**************************** * Day Two ***************************/}
        {/* <LinearGradient
          colors={["#B0A4FF", "#806EF8"]}
          style={{
            borderRadius: 20,
            height: 120,
            elevation: 50,
            width: 110,
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
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
                marginTop: 5,
                fontSize: 25,
              }}
            >
              30˚c
            </Text>
          </View>

          <Text
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 0 }}
          >
            25 - 55 - 5555
          </Text>
          <Text
            numberOfLines={1}
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 5 }}
          >
            Broken clouds
          </Text>
        </LinearGradient> */}

        {/**************************** * Day Three ***************************/}
        {/* <LinearGradient
          colors={["#B0A4FF", "#806EF8"]}
          style={{
            borderRadius: 20,
            height: 120,
            elevation: 50,
            width: 110,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
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
                marginTop: 5,
                fontSize: 25,
              }}
            >
              30˚c
            </Text>
          </View>

          <Text
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 0 }}
          >
            25 - 55 - 5555
          </Text>
          <Text
            numberOfLines={1}
            style={{ fontFamily: "ExtraBold", color: "#fff", marginTop: 5 }}
          >
            Broken clouds
          </Text>
        </LinearGradient> */}
      </View>
    </View>
  );
};

export default ForecastScreen;
const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     backgroundColor: "#1A1D26",
    //   },
});
