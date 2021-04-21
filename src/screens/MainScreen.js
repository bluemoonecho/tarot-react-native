import React, {useState} from  'react';
import { View,Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import { createNavigator } from 'react-navigation';
import cardsArray from '../cards-folder/cardsArray';
import cardsObject from '../cards-folder/cardsObject';

import contentArray from '../cards-meanings/Content';
import {
    useFonts,
    Lustria_400Regular,
    } from '@expo-google-fonts/lustria';
import * as Animatable from 'react-native-animatable';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

// const backCard = require('../cards-folder/back.png')

// console.log(cardsObject[num].card)

const MainScreen = ({navigation}) => {

    const [number, setCard] = useState()
    

    const [drawVisible, setDrawVisible] = useState(true);
    const [cardVisible, setCardVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Lustria_400Regular,
        });

    const shuffle = ()=> {
        setCard(() => {
            let random = [Math.floor(Math.random() * cardsObject.length)];
            return random
        })
    }

    console.log(number)

    // const chosenCard = cardsObject[number].card

    console.log(`HEEEEELOOOOO` , cardsObject[number].card)

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
        } else {
            return <View style={styles.container}>
                    <Text style={styles.title}> 🔮 Ask a Question 💫 </Text>
                    {drawVisible ? 
                    <View style={styles.containerDraw}>
                        <Animatable.Text 
                        animation="pulse" 
                        iterationCount='infinite' 
                        easing="ease-in"
                        direction="alternate">
                            <TouchableOpacity style={styles.draw} 
                            onPress={
                                ()=>{
                                        shuffle();
                                        setDrawVisible(false);
                                        setTimeout(()=> setCardVisible(true), 800)
                                        setTimeout(()=> setContentVisible(true),2000)
                                        
                                }
                                }>
                                <Text style={styles.titleDraw}> Draw a Card </Text>
                            </TouchableOpacity>
                        </Animatable.Text>
                        </View> 
                        : null }
                        <Modal
                            animationType="fade"
                            easing="easeIn"
                            transparent={true}
                            visible={cardVisible}
                            >
                            <Image style={styles.card}  />
                            {contentVisible ? 
                            <View style={styles.content}>
                                <Text style={styles.contentText}>{contentArray}</Text>
                            </View> 
                            : null}
                        </Modal>
                    
                </View>
                
        }
}

{/* <Modal
animationType="fade"
transparent={true}
visible={dislikeVisible}>
<MaterialCommunityIcons
style={styles.dislikeAction}
name={'minus'}
size={200}
/> */}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e8e4d9',
        width: '100%',
        height: '100%'
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'Lustria_400Regular',
    },
    card: {
        height: 400,
        width: 230,
        marginTop: 200,
        alignSelf:'center',
    },
    containerDraw: {
        alignSelf:'center',
        marginTop: 150,
    },
    draw:{ 
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
    content: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: 'white',
        width: 300,
        height: 200,
        alignSelf:'center',
        marginTop: 30,
    },
    contentText: {
        textAlign: 'justify',
        padding: 20,
        fontFamily: 'Lustria_400Regular',
        fontSize: 14,
    }
})

export default MainScreen;