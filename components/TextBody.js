import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextBody = (props) => {
    return(
        <Text style = {{...styles.textBody, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textBody: {
        fontSize: 16,
        color: '#eb2f64',
        fontFamily: 'roboto-bold',
        textAlign: 'center'
    }
})

export default TextBody;