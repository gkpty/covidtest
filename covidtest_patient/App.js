import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CaseRequestForm from './components/CaseRequestForm';
import Location from './components/Location'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Covid Test</Text>
      <CaseRequestForm></CaseRequestForm>
      <Location></Location>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
    padding: 30,
    justifyContent: "center"
  },
  title: {
    alignSelf: "center",
    fontSize: 30
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
