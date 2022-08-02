import { View, Text } from "react-native";
import React from "react";

const Frame = ({ fName1, fName2, lname1, lname2 }) => {
  return (
    <View>
        <Text>
          Your First Name is {fName1}
          {fName2} ! and Last name is {lname1}
          {lname2}
        </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View style={{alignItems: "center", justifyContent: "center",flex:1}}>
      <Frame fName1="Krittin" lname1="kamkar" />
      <Frame fName2="Nattapat" lname2="Saipan" />
    </View>
  );
};

export default MyCustomTextWith;
