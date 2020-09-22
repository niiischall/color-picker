import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  StyleSheet 
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameSuccess from './screens/GameSuccess';
import GameFailure from './screens/GameFailure';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans--bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'pacifico': require('./assets/fonts/Pacifico.ttf')
  });
}

const App = () => {
  const [gameOver, changeGameStatus]         = useState(false);
  const [options, changeOptions]             = useState(null);
  const [correctOption, changeCorrectOption] = useState('');
  const [gameTrials, changeGameTrails]       = useState(0);
  const [dataLoaded, changeDataLoaded]       = useState(false);

  const handleChangeOptions = (optionNumber) => {
    changeOptions(optionNumber);
    onGameTrial(0);
  }

  const onGameOver = () => {
    changeGameStatus(true);
  }

  const chooseCorrectOption = (color) => {
    changeCorrectOption(color);
  }

  const onGameRestart = () => {
    changeOptions(null);
    changeGameStatus(false);
  }

  const onGameTrial = (inputTrial) => {
    changeGameTrails(inputTrial);
  }

  let content = null;
  if(!options){
    content = <StartScreen onStart = {handleChangeOptions}/>
  }

  if(options){
    content = <GameScreen 
      onGameOver  = {onGameOver}
      options     = {options}
      chooseColor = {chooseCorrectOption}
      gameTrials  = {gameTrials}
      onGameTrial = {onGameTrial}
    />
  }

  if(gameTrials === 3 && options){
    content = <GameFailure 
      color         = {correctOption} 
      gameRestart   = {onGameRestart}
    />
  }

  if(gameOver){
    content = <GameSuccess 
      onGameRestart = {onGameRestart}
      color         = {correctOption} 
    />
  }

  if(!dataLoaded){
    return <AppLoading 
      startAsync = {fetchFonts}
      onFinish   = {() => changeDataLoaded(true)}
      onError    = {() => {console.log("Error Loading Data.")}}
    />
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header />
      {content}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default App;