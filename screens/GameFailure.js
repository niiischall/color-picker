import React from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Card from '../components/Card';
import Footer from '../components/Footer';

const GameFailure = (props) => {
    return(
        <View style = {styles.FinishScreen}>
            <Card style = {styles.failureCard}>
                <View style = {styles.Header}>
                    <Text style = {styles.heading}>
                        Sorry, You Lost.
                    </Text>
                    <Text style = {styles.subheader}>
                        The Right Color Was...
                    </Text>
                </View>
            </Card>
            <Card 
                style = {{
                    ...styles.ColorHeader,
                    backgroundColor: props.color
                }}
            >
                <Text style = {styles.subheading}>
                    {props.color}
                </Text>
            </Card>
            <Card style = {styles.ImageContainer}>
                <Image 
                    source = {require('../assets/failed.jpg')}
                    style  = {styles.Image}
                    resizeMethod = "scale"
                />
            </Card>
            <Card style = {styles.nextGameCard}>
                <Text style = {styles.subheader}>
                    Wanna Play Again ?
                </Text>
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
    heading: {
        fontSize: 26,
        fontFamily: "pacifico",
        textAlign: "center",
        color: "#eb2f64"
    },
    subheader: {
        fontSize: 20,
        fontFamily: "roboto-medium",
        textAlign: "center",
        color: "#eb2f64",
        padding: 10
    },
    subheading: {
        fontSize: 20,
        fontFamily: "roboto-medium",
        textAlign: "center",
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