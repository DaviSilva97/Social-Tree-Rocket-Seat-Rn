import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import GitHubSvg from '../assets/github.svg';
import LinkedinSvg from '../assets/linkedin.svg';
import TwitchSvg from '../assets/twitch.svg';
import TwitterSvg from '../assets/twitter.svg';
import InstaSgv from '../assets/instagram.svg';


export default function SocialNetworksContainer() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <TwitterSvg/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <TwitchSvg />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <InstaSgv/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <LinkedinSvg/>
            </TouchableOpacity> 
            <TouchableOpacity>
                <GitHubSvg/>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
      flex: 1,  
      flexDirection: 'row',
      height: 24,
      width: 280 ,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
})
