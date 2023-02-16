import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState("BlockSafe");

  const changeHandler = (value) => {
    setName(value)
  }
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{name}</Text>
        <TextInput placeholder='Enter a title...' style={styles.input} onChangeText={(val) => changeHandler(val)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle : {
    padding: 30,
    alignItems: 'center',
    backgroundColor: "#191970",
    width : Dimensions.get("window").width*1.8,
    height: Dimensions.get("window").width*1.8,
    borderRadius: Dimensions.get("window").width,
    position: "relative",
    bottom:-Dimensions.get("window").height + Dimensions.get("window").width*1.5
  },

  text: {
    color: "white",
    fontSize: 40
  }, 

  input : {
    borderRadius: 5,
    borderWidth:1,
    borderColor: "black",
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    alignItems: 'center',
    width: 200,
    position: "relative",
    bottom: -Dimensions.get("window").height + Dimensions.get("window").width
  }
});
