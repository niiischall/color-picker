import React, { useState, useEffect } from 'react';
import { 
    View,
    ScrollView, 
    Alert, 
    Keyboard,
    TextInput,
    BackHandler, 
    StyleSheet,
    Dimensions 
} from 'react-native';

import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';
import TextTitle from '../components/TextTitle';
import TextBody from '../components/TextBody';


const StartScreen = (props) => {
    const [inputValue,changeInputValue] = useState(null);
    const [confirmedValue,changeConfirmedValue] = useState(null);
    const [screenWidth, changeScreenWidth] 
        = useState(Dimensions.get('window').width);

    useEffect(() => {
        Dimensions.addEventListener('change', 
        screenWidthHandler);
        return (() => {
            Dimensions.removeEventListener('change', screenWidthHandler)
        })
    })

    const changeInputHandler = (input) => {
        changeInputValue(input);
    }

    const confirmInputValue = () => {
        changeConfirmedValue(inputValue);
        Keyboard.dismiss();
    }

    const denyInputValue = () => {
        changeConfirmedValue(null);5
    }

    const resetInputValue = () => {
        changeConfirmedValue(null);
        changeInputValue(null);
        Keyboard.dismiss();
    }

    const appExitHandler = () => {
        Alert.alert(
            `Are you Sure?`,
            `Do you want to exit Color Picker?`,
            [
                {
                    text: 'NO',
                    onPress: () => {},
                    style: 'cancel'
                },
                {   
                    text: 'YES',
                    onPress: () => BackHandler.exitApp(),
                    style: 'default'
                }
            ]
        )
    }

    const screenWidthHandler = () => {
        changeScreenWidth(Dimensions.get('window').width);
    }

    return(
        <ScrollView 
            contentContainerStyle = {styles.StartScreen}
        >
            <Card style = {{
                ...styles.card,
                marginTop: screenWidth < 600 
                    ? screenWidth/3 
                    : screenWidth/32,
                padding: screenWidth < 600
                    ? 10 : 0
            }}>
                <TextTitle style = {styles.heading}>
                    Welcome To Color Picker!
                </TextTitle>
                <TextBody style = {styles.subheading}>
                    How many colors you want to pick from ?
                </TextBody>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        style           = {styles.input}
                        keyboardType    = "phone-pad"
                        maxLength       = {2}
                        autoCapitalize  = "none"
                        autoCorrect     = {false}
                        value           = {inputValue}
                        onChangeText    = {changeInputHandler}
                    />
                </View>
                <View style = {{
                    ...styles.buttonContainer,
                    marginVertical: screenWidth < 600 
                    ? 25 : 17.5
                }}>
                    <View style = {styles.button}>
                        <Button 
                            title   = "RESET"
                            style   = {{
                                backgroundColor : "#e60000"
                            }}
                            color = "#FFFFFF"
                            onClick = {resetInputValue}

                        />
                    </View>
                    <View style = {styles.button}>
                        <Button 
                            title   = "CONFIRM"
                            style   = {{
                                backgroundColor : "#00b300"
                            }}
                            color   = "#FFFFFF"
                            onClick = {confirmInputValue}
                        />
                    </View>
                </View>
            </Card>
            {
                confirmedValue
                ? 
                Alert.alert(
                    `Good Luck!`,
                    `You\'ll need to pick the right color from ${confirmedValue} color options.`,
                    [
                        {
                            text: 'GO BACK',
                            onPress: denyInputValue,
                            style: 'cancel'
                        },
                        {   
                            text: 'START GAME',
                            onPress: () => props.onStart(confirmedValue),
                            style: 'default'
                        }
                    ]
                )
                : null 
            }
            {   !inputValue
                ? <Footer 
                    title   = "EXIT GAME"
                    onClick = {appExitHandler}
                  />
                :null
            }
        </ScrollView>
)}

const styles = StyleSheet.create({
    StartScreen:{
        backgroundColor: '#eb2f64',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25
    },
    heading:{
        marginTop: 10
    },
    subheading: {
        padding: 10,
        marginTop: 16
    },
    inputContainer:{
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: 75,
        borderBottomWidth: 3,
        borderColor: "#eb2f64",
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        width: 100
    },
    confirmedText: {
        padding: 10,
        width: '90%'
    }
});

export default StartScreen;