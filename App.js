import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBook from './components/AddBook'
export default class App extends React.Component {
  render() {
    return (
      <AddBook/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
