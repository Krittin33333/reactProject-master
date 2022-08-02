import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotOfGreeting from './components/LotOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassword from './components/UserNameandPassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'
import Dynamicstyle from './components/Dynamicstyle'
import ModelExample from './components/ModelExample'
import ModalPractice from './components/ModalPractice'
const App = () => {
  return (
    <View style = {styles.container}>
      {/* <Count/> */}
       {/* <UserNameandPassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      {/* <TouchablePractice/> */}
       
       {/* <Dynamicstyle/> */}
       <ModelExample/>
       {/* <ModalPractice/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'center',
      // alignItems:'center'
      
  },
 
})