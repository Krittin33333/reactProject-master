import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassword = () => {
  const [textInputName, setUsername] = useState("");
  const [textInputEmail, setEmail] = useState("");

const checkTextInput= () => {
  if (!textInputName.trim()) {
    alert('Please Enter Name');
    return;
  }
  if (!textInputEmail.trim()) {
    alert('Please Enter Email');
    return;
  }
  if (textInputEmail.trim()&&textInputName.trim()) {
    alert('Success');
    return;
  }
}

  return (
    <View style={styles.container}>
      <TextInput
        value={textInputName}
        onChangeText={(textInputName) => {
          setUsername(textInputName);
        }}
        style={styles.textInputStyle}
        placeholder="Enter Name"
      />
      <TextInput
        value={textInputEmail}
        onChangeText={(textInputEmail) => {
          setEmail(textInputEmail);
        }}
        style={styles.textInputStyle}
        placeholder="Email"
      />
      <View style = {{width:300 ,marginTop:20}}>
      <Button onPress= {checkTextInput}
        
        title="Submit" color="#858585"   />
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
