import React from 'react';
import { 
    TouchableOpacity , 
    View,
    StyleSheet 
} from 'react-native';

import TextBody from './TextBody';

const Button = (props) => {
    return(
        <TouchableOpacity
            activeOpacity = {0.8}
            onPress       = {props.onClick}
            style         = {{...styles.button, ...props.style}}
        >
            <View style = {styles.buttonContainer}>
                <TextBody style = {{
                    ...styles.buttonText,
                    color: props.color
                }}>
                    {props.title}
                </TextBody>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 10, 
            height: 10 
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10,
    },
    buttonContainer: {
        padding: 7.5
    },
    buttonText: {
        fontFamily: 'open-sans--bold'
    }
})

export default Button;