import React, { Component } from 'react';
import { Font,StyleSheet,View, Text } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title : 'Dulcinskiss'
    };
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({Lobster: require('../assets/fonts/Lobster-Regular.ttf')});
    this.setState({loaded: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF3FDD',
        alignItems: 'center',
        justifyContent: 'center',
        //fontFamily: 'Lobster'
    }
})