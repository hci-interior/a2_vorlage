import React, {Component} from 'react';

import colors from "../config/color";
import {Text, View, Image, StyleSheet, TouchableNativeFeedback} from "react-native";
import {createClient} from "pexels";


export default class APIButton extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
        const client = createClient('563492ad6f917000010000011c05560a15ea4d10a704aea12888b534');
        const query = this.props.animal;
        client.photos.search({ query, per_page: 1 }).then(photos => {
            console.log(photos);
            this.setState({ image: photos.photos[0].src.original});
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback
                    style={{width: "100%"}}
                    onPress={() => this.props.navigation.navigate("API",{animal: this.props.animal})}
                >
                <Image source={
                    {
                        uri: this.state.image,
                        width: "100%",
                        height: "100%"
                    }
                }/>

                </TouchableNativeFeedback>
                <Text style={styles.text}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        width: "96%",
        borderRadius: 20,
        margin: 5
    },
    text:{
        position: "absolute",
        bottom: 10,
        left: 10,
        textAlign: "left",
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
    }
})
