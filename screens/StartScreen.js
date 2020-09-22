import React, { useState } from 'react';
import { 
    View, 
    Text,
    Alert, 
    Keyboard,
    TextInput,
    BackHandler, 
    StyleSheet 
} from 'react-native';

import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';


const StartScreen = (props) => {
    const [ inputValue, changeInputValue ] = useState(null);
    const [confirmedValue, changeConfirmedValue] = useState(null);

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

    return(
        <View style = {styles.StartScreen}>
            <Card style = {styles.card}>
                <Text style = {styles.heading}>
                    Welcome To Color Picker!
                </Text>
                <Text style = {styles.subheading}>
                    How many colors you want to pick from ?
                </Text>
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
                <View style = {styles.buttonContainer}>
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
        </View>
)}

const styles = StyleSheet.create({
    StartScreen:{
        backgroundColor: '#eb2f64',
        flex: 1,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: -20,
        marginBottom: 35,
        marginVertical: 5,
        marginHorizontal: 20
    },
    heading:{
        marginTop: 10,
        fontSize: 26,
        fontFamily: 'pacifico',
        color: '#eb2f64'
    },
    subheading: {
        padding: 10,
        marginTop: 16,
        color: '#eb2f64',
        fontFamily: 'roboto-bold',
        fontSize: 17,
        textAlign: 'center'
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
        justifyContent: 'space-evenly',
        marginVertical: 25
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