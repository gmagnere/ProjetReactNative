//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert  } from 'react-native';
import React, {useState} from "react";

export default function App() {
  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ] ;
  const [text, onChangeText] = useState("");
  const [goalList, setGoalList] = useState(sampleGoals);

  const onPressAdd = () => {
    setGoalList([...goalList, text])
  };

  const onPressDelete = (index) => {
    //setGoalList(goalList.filter((item) => {
    //      return item !== "Aller à la salle de sport 3 fois par semaine"
    //   }
    //  )
    //)
  }

  return (
      <View style={styles.container}>
        {

          goalList.map((goal, index) => (
                <View style={styles.Array}>
                  <Text key={index} style={styles.text}>
                    {goal}
                  </Text>
                  <Button
                      color='#f194ff'
                      title="X"
                      onPress={onPressDelete(index)}
                  />
                </View>
          ))
        }
        <View style={styles.containerInput}>
          <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Entrer ici'
          />
          <Button
              color='#f194ff'
              title="Ajouter"
              onPress={onPressAdd}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: 'rgba(241,148,255,0.34)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    borderColor: '#f194ff',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignSelf: "flex-end",
  }
});
