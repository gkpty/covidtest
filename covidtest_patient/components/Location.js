import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);
import { graphqlOperation } from '@aws-amplify/api'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {createLocation} from '../src/graphql/mutations'
import * as TaskManager from 'expo-task-manager';

//const LOCATION_TASK_NAME = 'background-location-task'

export default class LocationUpdate extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  constructor(props) {
    super(props);
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.watchLocationAsync();
    }
  }

  watchLocationAsync = async () => {
    let permissions = await Permissions.askAsync(Permissions.LOCATION);
    if (permissions.status == 'granted') {
      //if Platform.OS = 'ios 
      // if permissions.permissions.location.ios.scope === always
      /* await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        timeInterval:"3", 
        distanceInterval:"1"
      }); */
      await Location.watchPositionAsync({distanceInterval:"20", timeInterval:"43200000"}, (location)=>{
        this.setState({ location });
        console.log(location)
        let input = {
          "platform":Platform.OS,
          "coordinates":{
            "lat":location.coords.latitude,
            "lon":location.coords.longitude
          }
        }
        this.CreateLocation(input);
      });
    }
    else {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  };

  async CreateLocation(input) {
    await API.graphql(graphqlOperation(createLocation, {input: input}))
      .then (result => {
          console.log('succesfully created a new location')
          return 
      })
      .catch(err => {
        console.log('error: ', err)
        return 'err'
      });
  }

 onPressButton = () =>{
  let text = 'Waiting..';
  if (this.state.errorMessage) {
    text = this.state.errorMessage;
  } else if (this.state.location) {
    text = JSON.stringify(this.state.location);
  }
   alert(text)
  }

  /*_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(location)
  }; */
  

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iosBgButton}
          onPress={this.onPressButton}
          underlayColor='#fff'>
          <Text style={styles.loginText}>get latest location</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

/* //task manager to get location
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    let output = {
      "type":Platform.OS,
      "coordinates":{
        "lat":data.coords.latitude,
        "lon":data.coords.longitude
      }
    }
    // create locations
    console.log(output)
  }
}); */

const styles = StyleSheet.create({
  iosBgButton:{
    borderRadius: 50,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#007aff',
    alignItems: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});