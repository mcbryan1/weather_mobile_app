import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import WeatherTemplate from "../components/WeatherTemplate";
import Axios from "axios";

export default class WeatherScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      coords: {
        latitude: 0,
        longitude: 0,
      },
      data: {},
      forecastOne: {},
      forecastTwo: {},
      forecastThree: {},
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // alert("Make Sure Your Device Location Is Turned On");
        // console.log(position)
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({
          coords: newCoords,
          loading: false,
        });
        Axios.get(
          ` https://api.weatherbit.io/v2.0/current?
        &lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}
        &key=847bd349a59b4933a872d6b1e2759f66 `
        ).then((response) => {
          console.log(response);

          let currentData = {
            location: response.data.data[0].city_name,
            country: response.data.data[0].country_code,
            temperature: response.data.data[0].temp,
            description: response.data.data[0].weather.description,
            date_time: response.data.data[0].ob_time,
            sunrise: response.data.data[0].sunrise,
            sunset: response.data.data[0].sunset,
            pressure: response.data.data[0].pres,
            humidity: response.data.data[0].rh,
            wind_speed: response.data.data[0].wind_spd,
            timezone: response.data.data[0].timezone,
            city: response.data.data[0].city_name,
            longitude: response.data.data[0].lon,
            latitude: response.data.data[0].lat,
          };
          //console.log(weatherData)
          this.setState({
            data: currentData,
          });
        });

        //+++++++++++ API CALL (FORECAST DAY 1) ++++++++++++++++++++
        Axios.get(
          ` https://api.weatherbit.io/v2.0/forecast/daily?
 &lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}
 &key=847bd349a59b4933a872d6b1e2759f66 `
        ).then((response) => {
          //console.log(res)

          let forecastData1 = {
            date: response.data.data[1].datetime,
            temp: response.data.data[1].temp,
            descript: response.data.data[1].weather.description,
            //icon: res.data.data[1].weather.icon,
          };
          // console.log(forecastData1)
          this.setState({
            forecastOne: forecastData1,
          });
        });


        //+++++++++++ API CALL (FORECAST DAY 2) ++++++++++++++++++++
        Axios.get(` https://api.weatherbit.io/v2.0/forecast/daily?
        &lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}
        &key=847bd349a59b4933a872d6b1e2759f66 `).then(response =>{
            //console.log(res)

            let forecastData2 = {
                dates: response.data.data[2].datetime,
                tempera: response.data.data[2].temp,
                desc: response.data.data[2].weather.description,
               // imgn: res.data.data[2].weather.icon,
               
            }
            console.log(forecastData2)
            this.setState({
                forecastTwo:forecastData2
            })
        })

        //+++++++++++ API CALL (FORECAST DAY 3) ++++++++++++++++++++
        Axios.get(` https://api.weatherbit.io/v2.0/forecast/daily?
        &lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}
        &key=847bd349a59b4933a872d6b1e2759f66 `).then(response =>{
            //console.log(res)

            let forecastData3 = {
                datee: response.data.data[3].datetime,
                temper: response.data.data[3].temp,
                descri: response.data.data[3].weather.description,
               
            }
            console.log(forecastData3)
            this.setState({
                forecastThree:forecastData3
            })
        })
      });
    }
  }
  render() {
    const { navigation } = this.props;
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#050536",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <WeatherTemplate
            currentData={this.state.data}
            forecastData1={this.state.forecastOne}
            forecastData2 ={this.state.forecastTwo}
            forecastData3 ={this.state.forecastThree}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
