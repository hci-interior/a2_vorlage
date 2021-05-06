import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import colors from "../config/color.js"

export default class APIScreen extends Component {
    constructor(props) {
        super(props);
        this.animal = this.props.route.params.animal;
        this.state = {
            facts: []
        }
    }
    componentDidMount() {
        const baseUrl = "https://cat-fact.herokuapp.com";
        const endpoint = "/facts/random?animal_type=" + this.animal + "&amount=5";

        fetch(baseUrl + endpoint)
            .then((body) => body.json())
            .then((res) => {
                this.setState({facts: res})
            })
    }

    render(){
        return(
            <View>
                {this.state.facts.map((fact,i) => {
                    return (
                        <View>
                            <Text style={styles.title}> Fact #{i + 1}</Text>
                            <Text style={styles.text}> {fact.text} </Text>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: colors.primary
    },
    text: {
        textAlign: "center",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    }
})
