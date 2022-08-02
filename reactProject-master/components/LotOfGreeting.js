import { View, Text } from "react-native";
import React from "react";

const Geeting = (props) => {
  return (
    <View style={{ alignItems : 'center' }}>
      <Text>Hello {props.name} {props.date}</Text>
    </View>
  );
};

const LotOfGreeting = () => {
  return (
    <View style={{ alignItems: 'center', top: 50 }}>
      <Geeting name='Marry chrismas 'date = '25-dec-2022 ' />
      <Geeting name="Happy New year "date = "31-dec-2022 " />
      <Geeting name="Songkarn Festival "date = "13-apr-2022 " />
    </View>
  );
};

export default LotOfGreeting;
