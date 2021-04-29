import React, {useState} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';




const CardAnimation = ()=> {

    const tarotBack = require('../cards-folder/tarotBack.png')

    const [animation, setAnimation] = useState(true)

    return (
        animation?
            <>
            <View style={styles.imageContainer}>
                <Animatable.View
                animation="slideOutLeft" 
                iterationCount='3'
                easing="ease-out-expo"
                style={styles.animate}
                onAnimationEnd={ () => { 
                    // (event)=> {props.onAnimationEnd(event.target.state)}
                    setAnimation(false)
                    }}
                >
                    <Image style={styles.image1} source={tarotBack}/>
                </Animatable.View>
                <Animatable.View
                animation="slideOutLeft" 
                iterationCount='3'
                easing="ease-out-expo"
                style={styles.animate}
                // direction="alternate"
                // onAnimationEnd='zoomOut'
                
                // animate={{ scale: [1, 2, 2, 1, 1], 
                // rotate: [0, 0, 270, 270, 0]}}
                >
                <Image style={styles.image2} source={tarotBack}/>
                </Animatable.View>
                <Animatable.View
                animation="slideInLeft" 
                iterationCount='3'
                easing="ease-out-expo"
                style={styles.animate}
                // direction="alternate"
                // onAnimationEnd='zoomOut'
                
                // animate={{ scale: [1, 2, 2, 1, 1], 
                // rotate: [0, 0, 270, 270, 0]}}
                >
                    <Image style={styles.image3} source={tarotBack}/>
                </Animatable.View>
            </View>
            </>
        : null 
    )

};

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
    },
    image1 : {
        height: 350,
        width: 200,
        marginTop: 130,
    },
    image2 : {
        height: 350,
        width: 200,
        marginTop: -350,
        marginLeft: 50,
        

    },
    image3 : {
        height: 350,
        width: 200,
        marginTop: -350,
        marginLeft: 50,
    },
    title: {
        marginTop: 100,
    }
});

export default CardAnimation;


