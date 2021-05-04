import React, {useState} from  'react';
import {ImageBackground, View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {
    useFonts,
    Lustria_400Regular,
    } from '@expo-google-fonts/lustria';
import * as Animatable from 'react-native-animatable';


const Intro = ({navigation}) => {
    
    const [fontsLoaded] = useFonts({
        Lustria_400Regular,
        });

    // const background = require(`../cards-folder/tarot-back.png`);


    if (!fontsLoaded) {
        return <Text>Loading...</Text>;yarn
        } else {
    return (
            <View style={styles.introContainer} >
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MainScreen')}>
                    <View style={styles.draw}>
                        <Animatable.Text 
                                    animation="pulse" 
                                    iterationCount='infinite' 
                                    easing="ease-out"
                                    direction="alternate">
                        <Text style={styles.titleDraw}> Take a Deep Breath </Text>
                        </Animatable.Text>
                    </View>
                </TouchableOpacity>              
            </View>
    )
        }
}

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        backgroundColor: '#e8e4d9',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        // marginTop: 50,
        // justifyContent: 'center',
        flex: 1,
        alignSelf:'center',
        top: '30%'
    },
    draw:{ 
        width: 250,
        height: 250,
        alignContent: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    titleDraw: {
        fontFamily: 'Lustria_400Regular',
        fontSize: 30,
        textAlign: 'center'
    },

})

export default Intro;