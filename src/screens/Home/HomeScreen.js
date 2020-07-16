import {StatusBar} from "expo-status-bar"
import React, {useEffect,useState} from 'react'
import {StyleSheet,Text,View, FlatList} from 'react-native'
import { useSelector } from "react-redux"
import Axios from "axios"
import { API_URL } from "../../constants/API"
import RestaurantCard from "./RestaurantCard"

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default({navigation}) => {
    const [restaurantList,setRestaurantList] = useState([])
    const userSelector = useSelector((state) => state.user)

    useEffect(()=> {
        Axios.get(`${API_URL}/restaurants`)
        .then((res)=>{
            console.log(res.data)
            setRestaurantList(res.data.result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const renderRestaurants = ({item}) => {
        return <RestaurantCard navigation={navigation} data={item} />;
    }

    return(
        <>
        <View 
        style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor:"black",
            opacity:0.5,
        }}
        />
        <View style={{alignItems:"center"}}>
            <FlatList  
            data={restaurantList}
            renderItem={renderRestaurants}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
        </>
    )
}

