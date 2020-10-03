import React, { useState, useEffect } from 'react';
import {
    View, 
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet
} from 'react-native';

import TextTitle from '../components/TextTitle';
import TextBody from '../components/TextBody';
import Card from '../components/Card';
import Footer from '../components/Footer';

const GameFailure = (props) => {
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
        const image = { uri : 'https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'};
        return(
            <View style = {styles.FinishScreen}>
                <ImageBackground 
                    source={image}
                    style={styles.backgroundImage}
                >
                    <Card style = {{
                        ...styles.failureCard,
                        height : '25%',
                        borderRadius: 30
                    }}>
                        <View style = {styles.Header}>
                            <TextTitle>
                                Sorry, You Lost.
                            </TextTitle>
                            <TextBody style = {styles.subheader}>
                                The Right Color Was...
                            </TextBody>
                        </View>
                    </Card>
                    <Card 
                        style = {{
                            ...styles.ColorHeader,
                            backgroundColor: props.color,
                            marginVertical: 20
                        }}
                    >
                        <TextBody style = {styles.subheading}>
                            {props.color}
                        </TextBody>
                    </Card>    
                    <Card style = {styles.nextGameCard}>
                        <TextBody style = {styles.subheader}>
                            Wanna Play Again ?
                        </TextBody>
                    </Card>
                </ImageBackground>
                <Footer 
                    title = "RESTART GAME"
                    onClick = {props.gameRestart}
                />
            </View>
        )
    }

    return(
        <View style = {styles.FinishScreen}>
            <Card style = {styles.failureCard}>
                <View style = {styles.Header}>
                    <TextTitle>
                        Sorry, You Lost.
                    </TextTitle>
                    <TextBody style = {styles.subheader}>
                        The Right Color Was...
                    </TextBody>
                </View>
            </Card>
            <Card 
                style = {{
                    ...styles.ColorHeader,
                    backgroundColor: props.color
                }}
            >
                <TextBody style = {styles.subheading}>
                    {props.color}
                </TextBody>
            </Card>    
            <Card style = {styles.ImageContainer}>
                <Image 
                    source={require('../assets/failed.jpg')}
                    style={styles.Image}
                    resizeMethod="scale"
                />
            </Card>
            <Card style = {styles.nextGameCard}>
                <TextBody style = {styles.subheader}>
                    Wanna Play Again ?
                </TextBody>
            </Card>
            <Footer 
                title = "RESTART GAME"
                onClick = {props.gameRestart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    FinishScreen: {
        flex: 1,
        alignItems: 'center'
    },
    failureCard: {
        marginVertical: 15,
        width: '90%',
        height: '15%',
        backgroundColor: "#fff",
        justifyContent: 'space-around'
    },
    ColorHeader: {
        marginTop: 0,
        width: '75%',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 50,
        overflow: 'hidden'
    },
    subheader: {
        padding: 10
    },
    subheading: {
        color: "#fff",
        padding: 10
    },
    ImageContainer: {
        width: 250,
        height: 250,
        marginTop: 15,
        marginBottom: 10,
        borderColor: '#eb2f64',
        borderWidth: 10,
        borderRadius: 125,
        alignItems: 'center',
        overflow: 'hidden',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    nextGameCard: {
        width: '50%',
        marginTop: 2,
        backgroundColor: "#FFF"
    }
})

export default GameFailure;