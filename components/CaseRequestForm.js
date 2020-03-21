import React, { Component } from 'react';
import { TextInput, Button, View } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);
import { graphqlOperation } from '@aws-amplify/api'
import {createPatient, createCase} from '../src/graphql/mutations'


export default class CaseRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age:"",
      document_type:"",
      document_id:""
    };
  }

  async createPatient(input) {
    await API.graphql(graphqlOperation(createPatient, {input: input}))
      .then (result => {
          console.log('succesfully created a new patient')
          return 'Success'
      })
      .catch(err => {
        console.log('error: ', err)
        return 'err'
      });
  }

  async submitCase(input) {
    let date = new Date()
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

  onPressButton = () =>{
    this.createPatient(this.state)
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Age"
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Document Type"
          onChangeText={(document_type) => this.setState({document_type})}
          value={this.state.document_type}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Document ID"
          onChangeText={(document_id) => this.setState({document_id})}
          value={this.state.document_id}
        />
         <Button
          title="Press me"
          onPress={this.onPressButton}
        />  
      </View>
    );
  }
}