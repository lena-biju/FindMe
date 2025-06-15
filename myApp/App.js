import 'react-native-gesture-handler';
 
import React, { useState } from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Button,StyleSheet,View,Modal,Text,Pressable,TextInput ,Image} from 'react-native';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import * as ImagePicker from 'expo-image-picker';

const Stack = createStackNavigator();

  

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image,setImage]=useState('')
  const[location,setLocation]=useState('')
  
  //const [encode,setEncode]=useState(null)
  const Upload = async () => {
    let form= new FormData()
    let filename = image.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    form.append('image',{ uri: image, name: filename, type })
  
    axios.post(" http://192.168.100.41:8000/match/", form,{
      headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((res)=>{console.log(res.data)})
    setLocation('')
    setImage('')
    setModalVisible(false)
    
  }
  const Close=()=>{
    setLocation('')
    setImage('')
    setModalVisible(false)
  }
  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      
      setImage(result.uri);
      
    }
  
  }
  const takeImage = async () => {
    
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({allowsEditing: true,
      quality: 1,});

    // Explore the result
    

    if (!result.cancelled) {
      setImage(result.uri);
    
    }
  }
      
  return (
    <NavigationContainer>
      <View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flex:1,flexDirection:'row'}}>
              <TextInput
                style={styles.input}
                placeholder='Location'
                value={location}
                onChangeText={(e)=>setLocation(e)}
                
                
              />
              </View>
              <View style={{flex:1,flexDirection:'column'}}>
                {image? <Image source={{uri:image}} style={{width:100,height:100,resizeMode:'contain'}} />:null}
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{marginRight:10}}>
                  <Button  style={{borderRadius: 3}} title="Choose Photo" onPress={pickImage}/>
                </View>
                <View  style={{marginLeft:3}}>
                  <Button  style={{borderRadius: 10}} title="Take Photo" onPress={takeImage}/>
                </View>
              </View>
              </View>
              <View style={{ flex: 1,justifyContent:'center',position:'absolute',bottom:0}}>
              <View style={{flexDirection:'row'}}>
              <Pressable
                style={{backgroundColor:'green',width:'50%'}}
                onPress={Upload}
              >
                <Text  style={styles.textStyle}>Submit</Text>
              </Pressable>
              <Pressable
                style={{backgroundColor:'red',width:'50%'}}
                onPress={Close}
              >
                <Text  style={styles.textStyle}>close</Text>
              </Pressable>
              </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Stack.Navigator initialRouteName="FirstPage">
      
        <Stack.Screen
          name="FirstPage"
          component={FirstScreen}
          options={{
            title: 'Missing Cases', //Set Header Title
            headerStyle: {
              backgroundColor: 'grey', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
              <Button
                onPress={() =>
                  setModalVisible(true)}
                title="Report"
                color="red"
                
              />
            ),
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondScreen}
          options={{
            title: 'Details', //Set Header Title
            headerStyle: {
              backgroundColor: 'grey', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width:500,
    height:500,
    flexDirection:'column',
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
    width:'50%',
    padding: 10,
    elevation: 1
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding:10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;