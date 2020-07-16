import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screens/Home/HomeScreen'
import { useSelector } from 'react-redux'
import DetailScreen from '../screens/Home/DetailScreen'

const Stack = createStackNavigator()

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default () => {
    const userSelector = useSelector((state)=> state.user)

    return(
        <Stack.Navigator>
            <Stack.Screen
            component={HomeScreen}
            name="Home"
            options={{title:userSelector.username}}
            />
            <Stack.Screen
            component={DetailScreen}
            name="Detail"
            />
        </Stack.Navigator>
    )
}
