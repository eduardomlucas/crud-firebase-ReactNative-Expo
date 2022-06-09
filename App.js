import { StatusBar } from 'expo-status-bar';
import {deleteDoc, doc,getDoc,setDoc} from 'firebase/firestore';
import { useState } from 'react';

import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
//Using DB reference
import {db} from './core/firebase-config';

export default function App() {
//storing Manga data
const [mangaDoc, setMangaDoc] =useState(null);
//update text
const [text, setText] = useState("");

//create
const Create= ()=>{
  //creating a new doc in Firebase
  const myDoc = doc(db,"mangas", "mymanga" );
  //
  const docData = {
    "name":"sas",
    "cap":3
  }

  setDoc(myDoc,docData)
  //handling promisses

  .then(()=>{
    //sucess
    alert("Sucess, document was successfully added!!!");
  })
  .catch((error)=>{
    //error
    alert(error.message)
  })
}
//read
  const Read= ()=>{
    //creating a new doc in Firebase
    const myDoc = doc(db,"mangas", "mymanga" );
    getDoc(myDoc)
    
    .then((snapshot)=>{
      //sucess
      if(snapshot.exists){
        setMangaDoc(snapshot.data());
      }
      else{
        alert("No document found :/");
      }
    })
    .catch((error)=>{
      //error
      alert(error.message)
    })
  

  }
//update
  const Update= (value,merge)=>{
    const myDoc = doc(db,"mangas", "mymanga" );
    setDoc(myDoc, value, {merge: merge})
    
      .then(()=>{
        //sucess
        alert("Sucess, document is up to date!!!");
        setText("");
      })
      .catch((error)=>{
        //error
        alert(error.message)
      })
        
  }
//delete
  const Delete= ()=>{
    const myDoc = doc(db,"mangas", "mymanga" );

    deleteDoc(myDoc)
    .then(()=>{
      //sucess
      alert("Sucess, document deleted!!!");
      
    })
    .catch((error)=>{
      //error
      alert(error.message)
    })
  
  }

  return (
    <View style={styles.container}>
      <Button title='Create new Doc' onPress={Create}></Button>
      <Button title='Read any Doc' onPress={Read}></Button>
      {
        mangaDoc != null && 
        <Text>Cap: {mangaDoc.cap}</Text>
      }
      <TextInput style={{
        width: '95%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: '2',
        borderRadius: 12,
        marginVertical: 20,
      }} placeholder={'Type here'} onChangeText={(text) => (setText(text))} value={text}></TextInput>

      <Button title='Update any Doc' onPress={() =>
        Update({
          "cap": text
        }, true )
        } disabled ={text ==""}></Button>
      <Button title='Delete the Doc' onPress={Delete}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
