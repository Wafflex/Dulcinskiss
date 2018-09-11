import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style= {styles.body}>
        <Text>Bodyyyyyy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
