import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function AuthButton(props) {
    return (
        <TouchableOpacity style={styles.defaultButton} onPress={() => props.buttonClick()} >
            <Text style={styles.buttonText}> {props.buttonText} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    defaultButton: {
        padding: 15,
        margin: 9,
        backgroundColor: '#941824',
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#f7f7f7',
        fontWeight: 'bold',
        fontFamily:'Poppins-Medium'
    }
});