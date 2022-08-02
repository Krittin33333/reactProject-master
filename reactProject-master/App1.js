import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
// import styles from './components/styles'
import StySheet from './components/stySheet';
// import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';
const App = () => {

  const showData = () => { 
    alert("Hello Button")
  }

  return (
    <View >
      {/* <Text style={[styles.title,styles.warning]}>Hello React Native</Text>
       */}
      
      <StySheet/>
      <Logo/>
      <Button 
        onPress={showData}
        title='Click Me'
      />
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
           
    </View>
  )
}

export default App

