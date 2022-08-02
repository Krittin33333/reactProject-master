import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React ,{ useState } from 'react'

const InputText = () => {

    const [username,setUsername] = useState('')

  return (
    <View style = {{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert anytest in below input</Text>
      <TextInput
      value={username}
      onChangeText = {(username)=>{setUsername(username)}}
        style = {styles.textinput}
        placeholder='Please input username'
      
      />

      <Text style={{fontSize:20}}>{username}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textinput :{
        width:250,
        height:40,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor: '#ecfafa',
        borderWidth:4,
        borderColor: "#EA4825",
        borderRadius: 6,padding:10

    }
})