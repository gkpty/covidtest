import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);
import { graphqlOperation } from '@aws-amplify/api'
import {createPatient, createCase} from '../src/graphql/mutations'
import * as SecureStore from 'expo-secure-store';



export default class CaseRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age:"",
      document_type:"",
      document_number:""
    };
  }

  async createPatient(input) {
    await API.graphql(graphqlOperation(createPatient, {input: input}))
      .then (result => {
          let patient_id = result.data.createPatient.id
          console.log(patient_id)
          SecureStore.setItemAsync("covidtest_patient_id", patient_id)
          return 'Success'
      })
      .catch(err => {
        console.log('error: ', err)
        return 'err'
      });
  }

  async submitCase(input) {
    //let date = new Date()
    await API.graphql(graphqlOperation(createCase, {input: input}))
        .then (result => {
          console.log(`Successfully created a new case`);
          return 'Success'
        })
        .catch(err => {
          console.log('error: ', err)
          return 'err'
        });
  }

  onPressStatus = () =>{
    SecureStore.getItemAsync("covidtest_patient_id").then( data => {alert(data)})
  }
 
  onPressButton = () =>{
    this.createPatient(this.state)
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput
          style={styles.formInput}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Age"
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Document Type"
          onChangeText={(document_type) => this.setState({document_type})}
          value={this.state.document_type}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Document ID"
          onChangeText={(document_number) => this.setState({document_number})}
          value={this.state.document_number}
        />
         <Button
          title="Press me"
          onPress={this.onPressButton}
        />
        <Button
          title="Press me patient"
          onPress={this.onPressStatus}
        />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formInput: {
    borderRadius: 50,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 10
  }
});