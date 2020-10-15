import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import avatar from "../assets/images/avatar.png";

const HeaderOne = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 15,
            width: 15,
            backgroundColor: "#5896FD",
            borderRadius: 100,
            position: "absolute",
            left: 133,
            elevation: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 10 }}>2</Text>
        </View>

        <Ionicons
          name="ios-menu"
          size={30}
          color="black"
          style={{
            marginHorizontal: 20,
            paddingVertical: 5,
            paddingHorizontal: 8,
            elevation: 20,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        />
        <Ionicons
          name="ios-notifications-outline"
          size={30}
          color="black"
          style={{
            marginHorizontal: 20,
            paddingVertical: 5,
            paddingHorizontal: 8,
            elevation: 20,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        />
        <Image
          source={avatar}
          style={{
            width: 35,
            height: 35,
            marginLeft: 150,
            padding: 20,
            backgroundColor: "#5896FD",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderOne;

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
});
