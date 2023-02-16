import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const [name, setName] = useState("BlockSafe");
  const [people, setPeople] = useState([
    {name:"Alex", key:"1"},
    {name:"Martin", key:"2"},
    {name:"Josh", key:"3"},
    {name:"Carl", key:"4"},
    {name:"Peter", key:"5"},
    {name:"Moses", key:"6"},
    {name:"Davis", key:"7"},
    {name:"Ruth", key:"8"},
    {name:"Cissy", key:"9"},
    {name:"Jovan", key:"10"},
    {name:"Blessing", key:"11"},
  ])

  const changeHandler = (value) => {
    setName(value)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  item: {
    marginTop:20,
    padding: 30,
    fontSize: 24,
    backgroundColor: "pink"
  }
})
