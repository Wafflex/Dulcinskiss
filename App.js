import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header/header';
import Body from './body/body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Header></Header>
        <Body></Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
