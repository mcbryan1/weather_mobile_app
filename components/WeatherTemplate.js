import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const WeatherTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#8feaff", "#1ea8c7", "#03718a"]}
          style={{alignItems: "center", borderRadius: 0, height: '90%',}}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 15,
              color: "#fff",
            }}
          >
            Sign in with Facebook
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
    backgroundColor: "#fff",
  },
 
});
