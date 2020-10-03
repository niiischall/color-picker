import React from 'react';
import { 
    View, 
    StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TextTitle from './TextTitle';

const Header = (props) => {
    return(
        <View style = {styles.header}>
            <Ionicons 
                name = "ios-color-palette"
                size = {38}
                color = "#eb2f64"
            />
            <TextTitle 
                style = {styles.headline}
            >
                Color Picker
            </TextTitle>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    headline: {
        marginLeft: 10
    }
});

export default Header;