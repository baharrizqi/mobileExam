import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from "./src/redux/reducers";
import ReduxThunk from "redux-thunk";

import RootNavigator from './src/navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/Auth/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
     <RootNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
