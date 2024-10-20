import React,{useState} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {Input,Button} from 'react-native-elements'
import { CheckBox } from '@rneui/themed';
export default function SignUp({navigation}) {
  const [checkBox,setCheckBox] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [passWord,setPassWord] = useState('')
  const addUser = async () =>{
    try{
      const reponse = await fetch('https://670955e3af1a3998baa13006.mockapi.io/Users', {method:'POST',headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:name,email:email,password:passWord,id:Math.random()
      })
      })
      const reponseJson = await reponse.json();
      console.log(reponseJson)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <View>
      <Text style={{fontSize:30,fontWeight:'800'}}>Nice to see you !</Text>
      <View>
        <Input inputContainerStyle={{borderWidth:1,borderRadius:10,}} inputStyle={{padding:10}} placeholder="Enter your name" onChangeText={(text)=>setName(text)}/>
        <Input inputContainerStyle={{borderWidth:1,borderRadius:10,}} inputStyle={{padding:10}} placeholder="Enter your email" onChangeText={(text)=>setEmail(text)} />
        <Input inputContainerStyle={{borderWidth:1,borderRadius:10,}} inputStyle={{padding:10}} placeholder="Enter your password" onChangeText={(text)=>setPassWord(text)} type="password" />
        <View style={{flexDirection:'row' ,alignItems:'center',backgroundColor:'white'}}>
            <CheckBox title=" I agree with" checked={checkBox} onPress={()=>setCheckBox(!checkBox)}  />
            <TouchableOpacity>
              <Text style={{color:'blue', fontWeight:'bold'}}>
                Teams and Conditions
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Button title="Continue" onPress={()=>{
          if(name && email && passWord){
            addUser(),navigation.navigate('Login')
          }
          else{
            alert('Vui long nhap day du')
          }
        }} />
    </View>
    </View>
  );
}
