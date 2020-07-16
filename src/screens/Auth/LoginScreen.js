import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const userSelector = useSelector((state) => state.user)

    const loginBtnHandler = () => {
        AsyncStorage.setItem("userData",username)
        .then(()=> {
            dispatch({
                type: "USER_LOGIN",
                payload: {username}
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(username)
    }
    return (
        <View style={{ ...styles.container }}>
            <Text> TomatoApp</Text>
            <Text>silakan masukan nama</Text>
            <View style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
            }}>
                <TextInput
                    autoCapitalize="none"
                    placeholderTextColor="black"
                    style={{
                        fontSize: 17,
                        color: "black",
                        lineHeight: 19
                    }}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
            }}>
               <Button title="Enter" onPress={loginBtnHandler}/>
            </View>
        </View>
    )

};