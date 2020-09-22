import React from 'react';
import { 
    TouchableOpacity , 
    View,
    Text,
    StyleSheet 
} from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity
            activeOpacity = {0.8}
            onPress       = {props.onClick}
            style         = {{...styles.button, ...props.style}}
        >
            <View style = {styles.buttonContainer}>
                <Text style = {{
                    ...styles.buttonText,
                    color: props.color
                }}>
                    {props.title}
                </Text>
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
        fontFamily: 'open-sans--bold',
        fontSize: 16
    }
})

export default Button;