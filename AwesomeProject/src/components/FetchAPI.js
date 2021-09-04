import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { textStyle } from '../style/ViewStyle';

class myComponent extends Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return (<View><Text  style = {
        textStyle.baseText,
        textStyle.titleText
        }>my Component has Mounted, Check the browser console </Text></View>);
  }
}
export default myComponent;
