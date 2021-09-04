import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import creatSagaMiddleware from 'redux-saga';
import allReducers from '../reducers';
import mySaga from '../saga/sagas';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import { textStyle } from '../style/ViewStyle';
import { Button, Text, View } from 'react-native';
import flex from './Flex';
import * as types from '../actions/types';


const sagaMiddleware = creatSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

const action = type => store.dispatch({type})

const UserComponent = () => {
  return (
    <View
    style ={
        {
            width:'100%',
            height:'100%',
            justifyContent:'center'
        }
    }
>
        <Button
          color="#3740FE"
          title="Login"
          onPress={() => action(types.LOGIN)}
        /> 
    </View>
  )
}
export default UserComponent