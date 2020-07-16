import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover"
    },
    contentContainer: {
        paddingHorizontal: 30,
    },
    welcomeText: {
        fontSize: 25,
        height: 34,
        color: "white",
    },
    textLogin: {
        color: "white",
        marginTop: 12,
        marginBottom: 12,
    }
})

export default (props) => {
    const { restaurantDetailData } = props.route.params

    return (
        <>
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "black",
                    opacity: 0.5,
                }}
            />
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Image
                    source={{
                        uri: restaurantDetailData.image,
                    }}
                    style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: 300,
                        height: 300,
                        marginTop: 10,
                        marginBottom: 15,
                    }} />
                <View style={{ ...styles.contentContainer }}>
                    <Text style={{ ...styles.welcomeText }}>
                        {restaurantDetailData.address}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginTop: 10, marginRight: 20 }}>
                        <Text style={{ color: "white" }}>Cuisines</Text>
                        <Text style={{ color: "white" }}>Open</Text>
                        <Text style={{ color: "white" }}>Cost for 2</Text>
                    </View>
                    <View style={{ marginTop: 10, marginRight: 20 }}>
                        <Text style={{ color: "white" }}>
                            {restaurantDetailData.cuisine}
                        </Text>
                        <Text style={{ color: "white" }}>
                            {" "}
                            {restaurantDetailData.openTime} AM -{" "}
                            {restaurantDetailData.closeTime} PM
                        </Text>
                        <Text style={{ color: "white" }}>
                            {restaurantDetailData.currency}. {restaurantDetailData.costForTwo}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

