import React, { Component } from 'react';
import { Image,StyleSheet,View, Text } from 'react-native';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../assets/images/title.png')}
            style={styles.image}
        />
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.3,
                width: '100%'
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image:{
        height: '60%',
        width: '60%',
        resizeMode: 'contain',
    }
})
