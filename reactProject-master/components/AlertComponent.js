import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = () =>{
        alert('Hello I am simple Alert form javaScipt')
    }

    const twoOptionAlertHanler = () =>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two Option Alert form React Native',
            [
                {
                    text:'Yes',
                    onPress: ()=> alert('Yes Pressed')
                },
                {
                    text:'No',
                    onPress: ()=> alert('No Pressed'),
                    style:'cancel'
                }
            ],
            // clicking out side of alert
            {cancelable:false}
        );
    }

  return (
    <View style ={styles.container}>
      <Button 
        onPress={simpleAlertHanler}
        title='Simple Alert'
      />
      <View style={{marginTop:20}}/>
      <Button 
        title='Alert with Two Options'
        onPress={twoOptionAlertHanler}
      />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        
},
});