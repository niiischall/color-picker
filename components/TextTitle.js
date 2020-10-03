import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextTitle = (props) => {
    return(
        <Text style = {{...styles.textTitle, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 26,
        fontFamily: 'pacifico',
        color: '#eb2f64',
        textAlign: "center",
    }
})

export default TextTitle;