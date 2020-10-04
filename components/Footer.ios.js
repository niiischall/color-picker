import React, {useState, useEffect} from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import Button from './Button';

const Footer = (props) => {
    const [screenHeight, changeScreenHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        Dimensions.addEventListener('change',screenHeightHandler);
        return () => {
            Dimensions.removeEventListener('change', changeScreenHeight);
        }
    });

    const screenHeightHandler = () => {
        changeScreenHeight(Dimensions.get('window').height);
    }

    return(
        <View style = {{
            ...styles.footer,
            ...props.style
        }}>
            <View style = {{
                ...styles.ButtonContainer,
                width: screenHeight < 450 
                ? screenHeight/2 : screenHeight/4
            }}>
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
        backgroundColor: "#eb2f64",
        borderTopWidth: 5,
        borderTopColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 0
    }
});

export default Footer;

