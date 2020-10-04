import React from 'react';
import { 
    View,
    Platform, 
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
                color = {
                    Platform.OS === 'android' 
                    ? "#FFFFFF" : "#eb2f64"
                }
            />
            <TextTitle 
                style = {{
                    ...styles.headline,
                    color: Platform.OS === 'android' 
                        ? "#FFFFFF" : "#eb2f64"
                }}
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
        backgroundColor: Platform.OS === 'android' 
            ? "#eb2f64" : "#FFFFFF",
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderBottomColor: Platform.OS === 'android' 
        ? "#FFFFFF" : "#eb2f64", 
        alignItems: 'center'
    },
    headline: {
        marginLeft: 10
    }
});

export default Header;