import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export default function CustomButton(props) {
    return (
        <>
            <TouchableOpacity style = {styles.customButton}>
                <Text style = {styles.textButton}>
                    {props.children}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    customButton: {
        marginBottom: 10, 
        borderWidth: 2,
        borderColor: '#BB99DD',
        backgroundColor: 'transparent',
        width: 280,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#BB99DD',
        fontFamily: 'Roboto-Black'
    }
})