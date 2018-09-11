import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
