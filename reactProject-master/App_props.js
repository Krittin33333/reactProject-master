import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotOfGreeting from './components/LotOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
const App = () => {
  return (
    <View style={{alignItems: "center", justifyContent: "center",flex:1}}>
      
       {/* <LotOfGreeting/>  */}
      <MyCustomTextWith/>
      
      
      {/* <view style={{padding:10,
      marginTop:16,
      marginBottom:16,
      paddingVertical:8,
      borderWidth:4,
      backgroundColor: "#ffffff",
      color: "#447CEE",
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold"}}>
          <Logo/>
          <User/>
      </view> */}
        
      
    </View>
  )
}

export default App