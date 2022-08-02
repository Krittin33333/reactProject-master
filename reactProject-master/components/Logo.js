import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = true;
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <text>{textLogo}</text>
      {/* {
        isTH && <text>ภาษาไทย</text>  
      } */}   
       {/* use if/elee or conditional operator */}
       {
          isTH
          ?(<text>ภาษาไทย</text>)  
          :(<text>ภาษาอังกฤษ</text>)  
       }

    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"pink",
        fontSize:60
    }
})