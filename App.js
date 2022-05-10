//import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, ImageBackground, FlatList, Modal, Pressable, Alert} from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);



  const onPressAdd = () => {
    //console.log("test")
    setGoalList([...goalList, {key: goalList.length+1, value:text}])
    setModalVisible(!modalVisible)
    //console.log(goalList)
  };

  const onPressDelete = (key) => {
    //console.log(key.id)
    return setGoalList(goalList.filter(item => item.key !== key.id))
  }

  const inputAdd = () => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Entrer ici'
        />
    )
  }

  const buttonAdd = () =>{
    return (
        <Button
            title="Valider"
            onPress={onPressAdd}
        />
    )
  }
  const modal = () => {
    return (
        <View style={styles.centeredView}>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}

          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.Array}>
                  {inputAdd()}
                  {buttonAdd()}
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Ajouter</Text>
          </Pressable>
        </View>
    );
  }
  const Item = ({ title, id }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        {buttonDelete({id})}
      </View>
  );

  const renderItem = ({ item }) => (
      <Item title={item.value} id={item.key}/>
  );

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
            <FlatList
                data={goalList}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            <View style={styles.containerInput}>
              {modal()}
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
    borderWidth: 1,
    padding: 10,
  },

  item: {
    backgroundColor: '#156988',
    padding: 20,
    marginTop: 30,
    justifyContent: "space-between",
    marginVertical: 1,
    marginHorizontal: 16,
    flexDirection: "row",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    padding: 10,
    elevation: 2,
    marginBottom: 5,
    marginTop: 5,
  },
  buttonOpen: {
    backgroundColor: "#156988",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
