import React, { useState, useEffect } from 'react';
import { 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Alert, 
    StyleSheet,
    Dimensions 
} from 'react-native';

import TextTitle from '../components/TextTitle';
import TextBody  from '../components/TextBody';
import Card      from '../components/Card';
import Footer    from '../components/Footer';

const GameScreen = (props) => {
    let [ chosenColor, changeChosenColor ] = useState(''); 
    let [ pallete, changePallete ]         = useState([]);
    let [screenWidth, changeScreenWidth] 
        = useState(Dimensions.get('window').width);
        
    useEffect(() => {
        Dimensions.addEventListener('change', 
        screenWidthHandler);
        return (() => {
            Dimensions.removeEventListener('change', screenWidthHandler)
        })
    })

    useEffect(() => {
        fillPalletes();
    }, []);

    useEffect(() => {
        selectColor();
    }, [pallete]);

    useEffect(() => {
        props.chooseColor(chosenColor);
    }, [chosenColor])

    const fillPalletes = () => {
        let newPallete = [];
        for(let i = 0; i < props.options; i++){
            newPallete.push(pickColor());
        }
        changePallete(newPallete);
    }

    const onClickingWrongOption = () => {
        props.onGameTrial(props.gameTrials + 1); 
        if((props.gameTrials + 1) < 3){
            Alert.alert(
                'Wrong Color',
                `Sorry, You Picked The Wrong Color. You have ${3 - (props.gameTrials + 1)} chances left.`,
                [{
                    text: 'Try Again',
                    onPress: () => {}
                }]
            )  
        } 
    }

    const onClickingCorrectOption = () => {
        props.chooseColor(chosenColor);
        props.onGameOver();
    }

    const onOptionClick = (inputColor) => {
        if(inputColor === chosenColor)
            onClickingCorrectOption();
        else  
            onClickingWrongOption();
    }

    const pickColor = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + ", " + g + " ," + b + ")";
    }

    const selectColor = () => {
        if(pallete.length > 0){
            let position = Math.floor(Math.random() * pallete.length);
            let selectedColor = pallete[position];
            changeChosenColor(selectedColor);
        }
    }

    const resetGame = () => {
        props.onGameTrial(0);
        fillPalletes();
    }

    const screenWidthHandler = () => {
        changeScreenWidth(Dimensions.get('window').width);
    }

    return(
        <ScrollView 
            contentContainerStyle = {styles.gameScreenContainer}
            style = {styles.gameScreen}
        >
            <Card style = {{
                ...styles.gameScreenCard,
                height: screenWidth > 600 
                    ? '15%' : '25%',
            }}>
                <View style = {{
                    ...styles.gameScreenHeading,
                    flexDirection: screenWidth > 600 
                        ? 'row' : 'column',
                }}>
                    <TextTitle style = {styles.title}>
                        Pick this color...
                    </TextTitle>
                    <Card style = {{
                        ...styles.rgbCard,
                        width: screenWidth > 600 
                            ? '45%' : '60%',
                        height: screenWidth> 600 
                            ? '100%' : '30%'
                    }}>
                        <TextBody style = {styles.subtitle}>
                            {chosenColor}
                        </TextBody>
                    </Card>
                </View>
            </Card>
            <View style = {styles.colorContainer}>
                <ScrollView 
                    contentContainerStyle = {{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >
                {
                    pallete.map((color) => {
                        return(
                        <TouchableOpacity 
                            key = {color}
                            activeOpacity = {0.5}
                            style = {{
                                ...styles.card,
                                backgroundColor: color
                            }}
                            onPress={() => onOptionClick(color)}
                        >
                            <TextBody>&nbsp;</TextBody>
                        </TouchableOpacity>
                    )})
                }
                </ScrollView>
            </View>
            <Footer 
                title = "RESET GAME"
                onClick = {resetGame}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gameScreenContainer:{
        flex: 1,
        alignItems: 'center'
    },
    gameScreen: {
        padding: 0,
        backgroundColor: '#eee'
    },
    gameScreenCard:{
        marginTop: 20,
        width: '85%',
        backgroundColor: "#eb2f64",
        elevation: 20
    },
    rgbCard: {
        paddingTop: 5,
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: '#eee'
    },
    gameScreenHeading: {
        width: '100%',
        height: '100%',
        padding: 10,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    title: {
        color: '#eee'
    },
    subtitle: {
        width: "100%",
        height: '100%'
    },
    colorContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        paddingBottom: 60,
        backgroundColor: "#eee"
    }, 
    card: {
        borderColor: '#eee',
        borderWidth: 5,
        borderRadius: 75,
        width: 150,
        height: 150,
        margin: 10,
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

export default GameScreen;