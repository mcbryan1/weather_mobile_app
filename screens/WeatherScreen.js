import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";

export default class WeatherScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    // if (this.state.loading) {
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: "center",
    //         justifyContent: "center",
    //         backgroundColor: "#050536",
    //       }}
    //     >
    //       <ActivityIndicator size="large" color="#fff" />
    //     </View>
    //   );
    // } else {
     return(
         <View style={styles.container}>
                <Text>llo</Text> 
         </View>
     )
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
