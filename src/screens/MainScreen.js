import React, {useState} from  'react';
import { View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createNavigator } from 'react-navigation';
import cardsArray from '../cards-folder/cardsArray';

const backCard = require('../cards-folder/back.png')

const MainScreen = () => {
    const [card, setCard] = useState(backCard);

    const shuffle = ()=> {
        setCard((x) => {
            let random = cardsArray[Math.floor(Math.random() * cardsArray.length)];
            return random
            console.log(random)
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Ask a Question </Text>
            <Image style={styles.card} source={card} />
            <TouchableOpacity style={styles.draw} onPress={shuffle}>
                <Text style={styles.btn}>DRAW A CARD</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        alignSelf: 'center',
        marginTop: 100,
    },
    title:{
        fontFamily: 'Avenir-Book',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        height: 500,
        width: 350,
    },
    draw: {
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 25,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        color: 'white',
    },
    btn: {
        color: 'purple',
        fontFamily: 'Avenir',

    }
})

export default MainScreen;