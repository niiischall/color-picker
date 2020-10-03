import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';

const Footer = (props) => {
    return(
        <View style = {{
            ...styles.footer,
            ...props.style
        }}>
            <View style = {styles.ButtonContainer}>
                <Button 
                    title   = {props.title}  
                    onClick = {props.onClick}
                    style   = {styles.button}
                    color = "#FFFFFF"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonContainer: {
        width: '70%'
    },
    button: {
        backgroundColor: '#eb2f64',
        padding: 0
    }
});

export default Footer;

