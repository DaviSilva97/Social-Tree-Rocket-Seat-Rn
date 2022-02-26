import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomButton from './components/CustomButton';
import SocialNetworksContainer from './components/SocialNetworksContainer';
import MainImage from './components/MainImage'



export default function App() {
  return (
    <View style={styles.container}>
      
      <MainImage/>

      <TouchableOpacity style= {styles.touchableOpacityInstagram}>
        <Text style= {styles.textInstagram} >@instagram</Text>
      </TouchableOpacity>
  
      <CustomButton>Link 1</CustomButton>
      <CustomButton>Link 2</CustomButton>
      <CustomButton>Link 3</CustomButton>
      <CustomButton>Link 4</CustomButton> 
      
      <SocialNetworksContainer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FD',
    alignItems: 'center',
    
  },
  touchableOpacityInstagram: {
    marginBottom: 15,
  },
  textInstagram: {
    color: '#BB99DD', 
    fontFamily: 'Roboto-Bold' 
  }

});
