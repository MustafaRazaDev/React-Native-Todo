import { React, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { doc, deleteDoc, getFirestore, updateDoc } from "firebase/firestore";
import { db } from "./db";
import Trash from "./trash.png";
import Edit from "./edit.png";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [updatedText, setUpdatedText] = useState('');

  async function DataAddHandle() {
    if (text == "" || text == null) {
      alert("Sorry, We are unable to do any anything for you");
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: text,
        });
        console.log("Document written with ID: ", docRef.id);
        setText(null);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Sorry, We are unable to do any anything for you");
      }
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    list = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
      console.log(todo);
    });
    setTodo(list);
  }

  async function Delete(id) {
    await deleteDoc(doc(db, "users", id));
  }
  
  function edit(id) {
    alert('ustaad mujha update karna ka shukriya')
    const docRef = doc(db, "users", id);
    const data = {
      name: "For now i am updating todos manually"
    }
    updateDoc(docRef, data)
    
    .catch(error => {
      alert('Error Updating Todo', error);
      
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
        label="Enter Todo"
        value={text}
        style={styles.TodoText}
        mode="outlined"
        onChangeText={(text) => setText(text)}
      />
      <Button
        icon="plus"
        style={styles.addButton}
        onPress={DataAddHandle}
        mode="contained">
        Add
      </Button>

      <Text style={styles.inpText}>{text}</Text>
      {todo?.map((Item) => {
        return (
          <View style={styles.todoBox}>
            <Text style={styles.todo}>{Item.name}</Text>
            <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => edit(Item.id)}>
              <Image style={styles.EditImg} source={Edit} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Delete(Item.id)}>
              <Image style={styles.TrashImg} source={Trash} />
            </TouchableOpacity>
          </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TodoText: {
    width: 280,
    height: 50,
    position: "absolute",
    top: 100,
    left: 20,
  },
  todo: {
    fontSize: 20,
  },
  inpText: {
    position: "absolute",
    top: 200,
    fontSize: 25,
    textAlign: "center",
  },
  addButton: {
    position: "absolute",
    top: 120,
    left: 310,
    fontSize: 50,
    borderRadius: 5,
  },
  TrashImg: {
    resizeMode: "contain",
    height: 20,
    width: 30,
  },
  EditImg: {
    resizeMode: "contain",
    height: 20,
    width: 30,
  },
  todoBox: {
    width: '90%',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 10,
  },
  imgContainer:{
    display: 'flex',
    flexDirection: 'row'
  }
});
