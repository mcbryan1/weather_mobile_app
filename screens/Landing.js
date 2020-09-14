import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import weather from "../assets/images/weatherapp.png";
import { AntDesign } from "@expo/vector-icons";

const Landing = ({ navigation }) => {
 
    return (
      <View style={styles.container}>
        <View
          style={{
            width: width - 1,
            height: "75%",
            backgroundColor: "#fff",
            alignSelf: "center",

            marginBottom: 10,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              marginVertical: 50,
              fontSize: 30,
              letterSpacing: 2,
            }}
          >
            {" "}
            Weather App{" "}
          </Text>
          <Image
            source={weather}
            style={[
              StyleSheet.absoluteFill,
              { borderRadius: 20, width: 400, height: 400, marginTop: 120 },
            ]}
          />
        </View>
        <AntDesign
         onPress={() => navigation.navigate("weather")}
          name="swapright"
          size={35}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "#050536",
            color: "#fff",
            padding: 30,
            borderTopLeftRadius: 50,
            elevation: 40,
          }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            marginHorizontal: 10,
            color: "#050536",
          }}
        >
          Version 1.0
        </Text>
      </View>
    );

}
export default Landing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
