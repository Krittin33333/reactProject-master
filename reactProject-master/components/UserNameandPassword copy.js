import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(username) => {
          setUsername(username);
        }}
        style={styles.textInputStyle}

        placeholder="Enter Name"
      />
      <TextInput
        value={password}
        onChangeText={(password) => {
         setPassword(password);
        }}
        style={styles.textInputStyle}
        placeholder="Email"
      />
      <View style = {{width:300 ,marginTop:20}}>
         <Button onPress= {()=>{alert (username+ '\n' + password)}}
         title="Submit" color="#1D23AE"   />
      </View>
    </View>
  );
};

export default UserNameandPassword;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:35,
  },
  textInputStyle:{
    width:'100%',
    height:40,
    paddingHorizontal:5,
    borderBottomWidth:0.5,
    marginTop: 15,
  }
});
