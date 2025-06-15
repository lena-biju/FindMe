import React,{useState,useEffect}  from 'react';
import { TextInput,StyleSheet, FlatList, Text, View,SafeAreaView,Image,ActivityIndicator} from 'react-native';
import firebaseApp from '../firebase';
import database from 'firebase/compat/database';
import { Divider } from "react-native-elements";
const FirstScreen = ({navigation}) => {


  const[snaps,setSnaps]=useState([])
  const [search, setSearch] = useState('');
  let array=[]
  
  const getdata=()=>{
    firebaseApp.database().ref().child('missing data')
        .once('value').then((snapshot)=>{
            snapshot.forEach(element=>{
                array.push(element.val())
            })  
            setSnaps(array)
        }) 
}
useEffect(() => {

   const getDetails=async()=>{
        await getdata()
        
    }
    getDetails();
    
},[snaps])
const onCase=({item})=>{
    return <View  style={styles.items}>
       <View style={styles.imageContainer}>
         <Image source={{uri:`${item.url}`,}} style={styles.image}/>
       </View>
       <View style={styles.metaInfo}>
       <Text style={styles.name} onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: item,
            })
          }>{item.firstname+' '+item.lastname}</Text>
       </View>
       
     </View>
     
   }
  
   const itemSeparator =()=>{
     return <View style={styles.separator}></View>
   }
    return (
    <SafeAreaView style={styles.container}>
        <View
         style={{
           backgroundColor: '#fff',
           padding: 10,
           marginVertical: 10,
           borderRadius: 20,
           width:'90%'
         }}
       >
         <TextInput
           autoCapitalize="none"
          autoCorrect={false}
           clearButtonMode="always"
           value={search}
           onChangeText={queryText => setSearch(queryText)}
           placeholder="Search"
           style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
         />
       </View>
     {!snaps && <ActivityIndicator size='large' />}
    {search.length>1 ?
    <FlatList   data={snaps.filter(val=>{
      if (val.firstname.toLowerCase().includes(search.toLowerCase())){
        return val
      }
    })} 
      renderItem={onCase}
      ItemSeparatorComponent={itemSeparator} />:
      <FlatList   data={snaps} 
      renderItem={onCase}
      ItemSeparatorComponent={itemSeparator} />    
}
   </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
      },
      listheader: {
        height:55,
        alignItems:'center',
        justifyContent:'center'
      },
      listheadline: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
      },
      items:{
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
      },
      imageContainer:{
        
        height:89,
        width:89,
        justifyContent:'center',
        alignItems:'center'
      },
      image:{
        width: 100,
        height: 100,
        borderRadius: 8
      },
      metaInfo: {
        marginLeft: 10
      },
      name:{
        fontSize: 18,
        width: 200,
        padding: 25
      },
      separator: {
        height:1,
        width:'100%',
        backgroundColor:'#CCC'
      },
})

export default FirstScreen;
