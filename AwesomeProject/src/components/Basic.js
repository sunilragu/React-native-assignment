
import React from "react";
import { Component } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

import { imageStyle, scrollViewstyles, textInputStyle, textStyle } from "../style/ViewStyle";
import AndroidPermission from "./AndroidPermission";
import CustomModel from "./CustomModel";


class Basic extends Component{

    constructor(props){
        super(props);
    }
    render(){

        return(
        <View
            style ={
                {
                    width:'100%',
                    height:'100%',
                    flexDirection:'column',
                    backgroundColor:'blue',
                    marginVertical:10
                    
                }
            }
        >
            <Text
             style = {
                textStyle.baseText,
                textStyle.titleText
                }
            >Text view Component!</Text>
{/* Text input or edit text example */}
            <TextInput
                placeholder = 'Edit text component!'
                placeholderTextColor='#000'

                style ={
                    textInputStyle.input
                }
                
              >
               
              </TextInput>
              <Image
                 style ={
                     imageStyle.imgView,
                     imageStyle.logo
                 }

                 
                 source={{uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
              >
              </Image>
            
              <ScrollView 
              style={
                  scrollViewstyles.scrollView
                  }>
                <Text style={scrollViewstyles.text}>
                     
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     scrollview
                     </Text>
                 </ScrollView>

            <CustomModel></CustomModel>
            <AndroidPermission></AndroidPermission>

        </View>
             
        );
    }
}

export default Basic;