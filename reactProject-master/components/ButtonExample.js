import { StyleSheet,
        Text, 
        View ,
        Button,
        SafeAreaView 
    } from 'react-native'
import React from 'react'

const Separator = () => (
        <View style = {styles.separator}/>
)

const ButtonExample = () => {
  return (
    <SafeAreaView style = {styles.container}>
         <View style ={styles.title}>
             <Text>
             He title and onPress handler are required.It is recommended to set   
             accessigilityLabel to thelp make your app usable by everyone.
             </Text>
             <Button
                title = "  press Me"
                onPress= { () => alert('Simple Button Presses')}
                
             />
         </View>
            <Separator/>
         <View style ={styles.title}>
             <Text>
             He title and onPress handler are required.It is recommended to set   
             accessigilityLabel to thelp make your app usable by everyone.
             </Text>
             <Button
                title = "  press Me"
                onPress= { () => alert('Simple Button Presses')}
                color = 'pink'
                
             />
         </View>
         <Separator/>
         <View style ={styles.title}>
             <Text>
             He title and onPress handler are required.
             </Text>
             <Button
                title = "  press Me"
                disabled
             />
         </View>
         <Separator/>
         <View style ={styles.title}>
             <Text>
             He title and onPress handler are required.It is recommended to set   
             accessigilityLabel to thelp make your app usable by everyone.
             </Text>
             <View style = {styles.fixToText}>
                <Button
                    title = "Left button"
                    color = 'pink'
                    onPress= { () => alert('Left Button Presses')}
                />
                
                <Button
                    title = "Rigth button"
                    onPress= { () => alert('Rigth Button Presses')}
                />
             </View>
             <View />
             
         </View>

    </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
},
    title: {
        textAlign: 'center',
        marginVertical: 8,
        width : 300,
        
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',},
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})