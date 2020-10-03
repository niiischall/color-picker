import React from 'react';
import {
    View, 
    Image,
    StyleSheet
} from 'react-native';

import TextTitle from '../components/TextTitle';
import TextBody from '../components/TextBody';
import Card from '../components/Card';
import Footer from '../components/Footer';

const GameFailure = (props) => {
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
                    source = {require('../assets/failed.jpg')}
                    style  = {styles.Image}
                    resizeMethod = "scale"
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
        backgroundColor: '#eee',
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