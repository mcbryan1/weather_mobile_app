import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherScreen from "../screens/WeatherScreen";
import ForecastScreen from "../screens/ForecastScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="weather"
          component={WeatherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forecast"
          component={ForecastScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
