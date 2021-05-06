import React from "react";
import {View, StyleSheet} from "react-native";
import APIButton from "../components/APIButton";
import colors from "../config/color";

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <APIButton navigation={navigation} animal={"cat"} name={"Cats"}/>
            <APIButton navigation={navigation} animal={"dog"} name={"Dogs"}/>
            <APIButton navigation={navigation} animal={"horse"} name={"Horses"}/>
            <APIButton navigation={navigation} animal={"snail"} name={"Snail"}/>
        </View>
    );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems:"center",
        justifyContent: "center"
    }
})
