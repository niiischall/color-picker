import React, { useState, useEffect } from 'react';
import { 
    View, 
    Image, 
    ImageBackground,
    Dimensions,
    StyleSheet 
} from 'react-native';

import TextTitle from '../components/TextTitle';
import TextBody from  '../components/TextBody';
import Card from '../components/Card';
import Footer from '../components/Footer';

const GameSuccess = (props) => {
    const [screenWidth, changeScreenWidth] 
    = useState(Dimensions.get('window').width);

    useEffect(() => {
        Dimensions.addEventListener('change', 
        screenWidthHandler);
        return (() => {
            Dimensions.removeEventListener('change', screenWidthHandler)
        })
    })

    const screenWidthHandler = () => {
        changeScreenWidth(Dimensions.get('window').width);
    }

    if(screenWidth > 600){
        const image = { uri : 'https://images.unsplash.com/photo-1515525941374-fe3a8803f768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'};
        return(
            <View style = {styles.FinishScreen}>
                <ImageBackground 
                source={image}
                style ={styles.backgroundImage}                
                >
                    <Card style = {{
                        ...styles.successCard,
                        height: '40%',
                        marginBottom: 20
                    }}>
                        <View style = {styles.Header}>
                            <TextTitle>
                                You Picked the Right Color!
                            </TextTitle>
                        </View>
                        <Card style = {{
                            ...styles.ColorHeaderCard,
                            backgroundColor: props.color
                        }}>
                            <TextBody 
                                style = {styles.subheading}
                            >
                                {props.color}
                            </TextBody>
                        </Card>
                    </Card>
                    <Card style = {styles.nextGameCard}>
                        <TextBody 
                            style = {styles.nextGameSubheading}
                        >
                            Wanna Play Again ?
                        </TextBody>
                    </Card>
                </ImageBackground>
                <Footer 
                    title = "RESTART GAME"
                    onClick = {props.onGameRestart}
                />
            </View>
        )
    }

    return(
        <View style = {styles.FinishScreen}>
            <Card style = {styles.successCard}>
                <View style = {styles.Header}>
                    <TextTitle>
                        You Picked the Right Color!
                    </TextTitle>
                </View>
                <Card style = {{
                    ...styles.ColorHeaderCard,
                    backgroundColor: props.color
                }}>
                    <TextBody style = {styles.subheading}>
                        {props.color}
                    </TextBody>
                </Card>
            </Card>

            <Card style = {styles.ImageContainer}>
                <Image 
                    source = {require('../assets/hooray.jpg')}
                    style  = {styles.Image}
                    resizeMethod = "scale"
                />
            </Card>
            <Card style = {styles.nextGameCard}>
                <TextBody style = {styles.nextGameSubheading}>
                    Wanna Play Again ?
                </TextBody>
            </Card>
            <Footer 
                title = "RESTART GAME"
                onClick = {props.onGameRestart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    FinishScreen: {
        width: "100%",
        backgroundColor: '#eb2f64',
        flex: 1,
        alignItems: 'center'
    },
    successCard: {
        marginTop: 20,
        width: '80%',
        height: '25%',
        backgroundColor: "#fff",
        justifyContent: 'space-around'
    },
    subheading: {
        color: '#ffffff',
        padding: 10
    },
    nextGameSubheading: {
        padding: 10
    },
    ColorHeaderCard: {
        width: "60%",
        height: '25%',
        marginBottom: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ImageContainer: {
        width: 250,
        height: 250,
        marginTop: 15,
        marginBottom: 10,
        borderColor: '#eee',
        borderWidth: 10,
        borderRadius: 125,
        overflow: 'hidden',
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    nextGameCard: {
        width: '50%',
        marginTop: 10,
        backgroundColor: "#FFF"
    }
})

export default GameSuccess;