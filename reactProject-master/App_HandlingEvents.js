import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const App = () => {
  const showData = () => {
    alert("Hello");
  };

  return (
    <View style={styles.container}>
      <text>Button Example</text>
      <Button 
         onPress={showData} title="Click Me" color="#6D23AE"/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
