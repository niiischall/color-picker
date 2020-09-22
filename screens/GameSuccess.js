import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet 
} from 'react-native';

import Card from '../components/Card';
import Footer from '../components/Footer';

const GameSuccess = (props) => {
    return(
        <View style = {styles.FinishScreen}>
            <Card style = {styles.successCard}>
                <View style = {styles.Header}>
                    <Text style = {styles.heading}>
                        You Picked the Right Color!
                    </Text>
                </View>
                <Card style = {{
                    ...styles.ColorHeaderCard,
                    backgroundColor: props.color
                }}>
                    <Text style = {styles.subheading}>
                        {props.color}
                    </Text>
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
                <Text style = {styles.nextGameSubheading}>
                    Wanna Play Again ?
                </Text>
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
    heading: {
        fontSize: 26,
        fontFamily: 'pacifico',
        textAlign: "center",
        color: "#eb2f64"
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'roboto-bold',
        textAlign: "center",
        color: '#ffffff',
        padding: 10
    },
    nextGameSubheading: {
        fontSize: 18,
        fontFamily: 'roboto-bold',
        textAlign: "center",
        color: '#eb2f64',
        padding: 10
    },
    ColorHeaderCard: {
        width: "60%",
        height: '25%',
        marginBottom: 10
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