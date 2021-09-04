// components/signup.js

import React, { Component } from 'react';
import { stylesSingupheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { stylesSingup } from '../style/ViewStyle';


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    // if(this.state.email === '' && this.state.password === '') {
    //   Alert.alert('Enter details to signup!')
    // } else {
    //   this.setState({
    //     isLoading: true,
    //   })
    //   firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then((res) => {
    //     res.user.updateProfile({
    //       displayName: this.state.displayName
    //     })
    //     console.log('User registered successfully!')
    //     this.setState({
    //       isLoading: false,
    //       displayName: '',
    //       email: '', 
    //       password: ''
    //     })
    //     this.props.navigation.navigate('Login')
    //   })
    //   .catch(error => this.setState({ errorMessage: error.message }))      
    // }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={stylesSingup.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={stylesSingup.container}>  
        <TextInput
          style={stylesSingup.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={stylesSingup.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={stylesSingup.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={stylesSingup.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }
}