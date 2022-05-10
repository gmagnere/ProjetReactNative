//import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';
import React, {useState} from "react";

export default function App() {
  const sampleGoals = [
    {key:1,value:"Faire les courses"},
    {key:2,value:"Aller à la salle de sport 3 fois par semaine"},
    {key:3,value:"Monter à plus de 5000m d altitude"},
    {key:4,value:"Acheter mon premier appartement"},
    {key:5,value:"Perdre 5 kgs"},
    {key:6,value:"Gagner en productivité"},
    {key:7,value:"Apprendre un nouveau langage"},
    {key:8,value:"Faire une mission en freelance"},
    {key:9,value:"Organiser un meetup autour de la tech"},
    {key:10,value:"Faire un triathlon"},
  ] ;
  const image = {uri: "https://i.stack.imgur.com/jGlzr.png"};
  const [text, onChangeText] = useState("");
  const [goalList, setGoalList] = useState(sampleGoals);

  const onPressAdd = () => {
    setGoalList([...goalList, {key: goalList.length+1, value:text}])
  };

  const onPressDelete = (key) => {
    return setGoalList(goalList.filter(item => item.key !== key))
  }

  const buttonAdd = () => {
    return (
        <Button
            title="Ajouter"
            onPress={onPressAdd}
        />
    )
  }

  const arrayMap = () => {
      return (
          goalList.map(({key, value}) => (
              <View style={styles.Array}>
                  <Text key={key} style={styles.text}>
                      {value}
                  </Text>
                  {buttonDelete(key)}
              </View>
          ))
      )
  }

  const buttonDelete = (key) => {
    return(
        <Button
            title="X"
            onPress={() => onPressDelete(key)}
        />
    )

  }
  const List = () => {
    return (
        <View  style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              {arrayMap()}
            <View style={styles.containerInput}>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder='Entrer ici'
              />
              {buttonAdd()}
            </View>
          </ImageBackground>
        </View>
    );
  }

  return List()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },

  Array: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  text: {
    color: 'rgb(21,105,136)',
    fontWeight: 'bold',
    fontSize: 20,
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },

  input: {
    borderColor: '#156988',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignSelf: "flex-end",
  },
});
