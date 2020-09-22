import React from 'react';
import { View , StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 10, 
            height: 10 
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 15,
    }
})

export default Card;