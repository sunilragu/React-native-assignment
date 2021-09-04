import React, { Component } from 'react';
import { Button, TextInput, View, Text, Alert } from "react-native";
import loginAPI from '../api/AsyncCall';
import { stylesLogin, stylesLoginLogin } from "../style/ViewStyle";

export default class Login extends Component{
    constructor(){

        super();
            this.state = {
                email:'',
                password:'',
                isLoading:false
            }

    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

      userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          loginAPI()
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Dashboard')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }

    render(){
        if(this.state.isLoading){
            return(<View style = {stylesLogin.preloader}></View>);

        }
        return(
        <View style={stylesLogin.container}>  
        <TextInput
          style={stylesLogin.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={stylesLogin.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.userLogin()}
        />   

        <Text 
          style={stylesLogin.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>);
    }

    
}