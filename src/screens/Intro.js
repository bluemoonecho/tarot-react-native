import React, {useState} from  'react';
import { View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createNavigator } from 'react-navigation';
import {
    useFonts,
    Lustria_400Regular,
    } from '@expo-google-fonts/lustria';
import * as Animatable from 'react-native-animatable';



const Intro = ({navigation}) => {
    
    const [fontsLoaded] = useFonts({
        Lustria_400Regular,
        });


    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
        } else {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Tarot')}>
            <View style={styles.draw}>
                <Animatable.Text 
                            animation="pulse" 
                            iterationCount='infinite' 
                            easing="ease-in"
                            direction="alternate">
                <Text style={styles.titleDraw}> Take a Deep Breath </Text>
                </Animatable.Text>
            </View>
        </TouchableOpacity>
    )
        }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e4d9',
        width: '100%',
        height: '100%'
    },
    draw:{ 
        marginTop: 250,
        width: 250,
        height: 250,
        borderRadius: 250/2,
        borderWidth: 1,
        borderColor: '#000',
        alignContent: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        
    },
    titleDraw: {
        fontFamily: 'Lustria_400Regular',
        fontSize: 30,
        textAlign: 'center',
    },

})

export default Intro;