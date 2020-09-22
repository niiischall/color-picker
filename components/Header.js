import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
    return(
        <View style = {styles.header}>
            <Ionicons 
                name = "ios-color-palette"
                size = {38}
                color = "#eb2f64"
            />
            <Text style = {styles.headline}>Color Picker</Text>
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
        color: 'white',
        fontSize: 32,
        fontFamily: 'pacifico',
        marginLeft: 10,
        color: '#eb2f64'
    }
});

export default Header;