import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


export default function MainImage() {
    return(
        <Image
            source={require('../assets/troll.jpg')}
            style = {styles.viewImage}

        />
    )
}

const styles = StyleSheet.create({
    viewImage: {
        padding: 50,
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 200 / 2,
        height: 200,
        width: 200,
        borderWidth: 2,
        borderColor: '#BB99DD',
    }
});

