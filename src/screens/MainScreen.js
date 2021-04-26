import React, {useState} from  'react';
import { View,Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import { createNavigator } from 'react-navigation';
import cardsObject from '../cards-folder/cardsObject';
import {
    useFonts,
    Lustria_400Regular,
    } from '@expo-google-fonts/lustria';
import * as Animatable from 'react-native-animatable';

import {
    createModalNavigator,
    ModalScreenProps,
  } from 'react-navigation-native-modal';


const MainScreen = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        Lustria_400Regular,
        });
/// shuffle function 

const shuffle = ()=> {
    setChosenNumber(() => {
        let random = Number(Math.floor(Math.random() * cardsObject.length));
        return random          
    })        
}
/// Choose Number
    const [chosenNumber, setChosenNumber] = useState()
    const listOfNames = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].name);
        }
        return tarot_cards;
    }
/// Choose Name
    const listNames = listOfNames(cardsObject);
    const listOfImages = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].cardImage);
        }
        return tarot_cards;
    }
/// Choose Image
    const listImages = listOfImages(cardsObject);
    const listOfKeywords = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].keywords);
        }
        return tarot_cards;
    }
/// Choose Keywords
    const listKeywords = listOfKeywords(cardsObject);
    const listOfContent = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].content);
        }
        return tarot_cards;
    }
////Creating the Variable to be shown
    const listContent = listOfContent(cardsObject);
    const tarotName = listNames[chosenNumber];
    const tarotImage= listImages[chosenNumber];
    const tarotKeywords = listKeywords[chosenNumber];
    const tarotContent = listContent[chosenNumber];

    ///MODALS STATES
    const [drawVisible, setDrawVisible] = useState(true);
    const [imageVisible, setImageVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);


// Modal Navigators
    const [imageIndex, setImageIndex] = useState(0)
    const [contentIndex, setContentIndex] = useState(1)


    const handleImageIndex = () => {
        imageIndex <= contentIndex ? setImageIndex(contentIndex + 1) : setImageIndex(0)
    }

    const handleContentIndex = () => {
        contentIndex <= imageIndex ? setContentIndex(imageIndex + 1) : setContentIndex(1)
    }


    // const confirmHandler

    // const [activeBtn, setActiveBtn] = useState(100);
    // const confirmHandler = () => {s
    //     setActiveBtn(0);
    // };
    console.log(imageIndex, contentIndex)

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
        } else {
            return (
            <>
            <View style={styles.container}>
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
                                setTimeout(()=> setImageVisible(true), 800)
                                setTimeout(()=> setContentVisible(true),2300)
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
                            visible={imageVisible}
                            >
                            <TouchableOpacity onPress={()=> handleImageIndex()} style={[styles.changeImageIndex, {zIndex: imageIndex}]}>
                            <Image style={styles.tarotImage} source={tarotImage} />
                            </TouchableOpacity>
                        {contentVisible ?                           
                        <View>  
                            
                                <ScrollView 
                                style={styles.contentContainer}
                                keyboardShouldPersistTaps={'always'}
                                >
                                <TouchableOpacity 
                                onPress={handleContentIndex} 
                                style={[styles.changeContentIndex, {zIndex: contentIndex}]}>
                                    <Text style={styles.tarotName}>{tarotName}</Text>
                                    <Text style={styles.tarotKeywords}>{tarotKeywords}</Text>
                                    <Text style={styles.tarotContent}>{tarotContent}</Text>
                                    </TouchableOpacity>
                                </ScrollView> 
                            
                        <TouchableOpacity style={styles.btnAskAgain} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.textAskAgain}>Ask Again</Text>
                        </TouchableOpacity>
                        </View>
                        : null}
                        </Modal>

                        {/* <View style={[styles.container, {backgroundColor: activeBtn}]}/> */}

                    
            </View>
            </>
            )
        }
}

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
    containerDraw: {
        alignSelf:'center',
        marginTop: 90,
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
    tarotImage: {
        height: 350,
        width: 200,
        marginTop: 130,
        alignSelf:'center',
    },
    contentContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: 'white',
        width: 300,
        height: 200,
        alignSelf:'center',
        marginTop: -100,
        marginBottom: 30,
        },
    tarotName: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'Lustria_400Regular',
        paddingLeft: 20,
        paddingTop: 15,
        fontWeight: 'bold',
    },
    tarotKeywords: {
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontFamily: 'Lustria_400Regular',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline'

    },
    tarotContent: {
        textAlign: 'left',
        padding: 20,
        fontFamily: 'Lustria_400Regular',
        fontSize: 14,
    },
    btnAskAgain: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom:70, 
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignSelf:'center',
        backgroundColor: '#83daf7',
        fontFamily: 'Lustria_400Regular',
    },
    textAskAgain: {
        fontFamily: 'Lustria_400Regular',
        fontSize: 14,
    }
})

export default MainScreen;