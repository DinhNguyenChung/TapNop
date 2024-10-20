import{View,SafeAreaView,Text} from 'react-native'
import {Input,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState} from 'react'
const Login=({navigation})=>{
  const [email,setEmail] = useState('')
  const [password,setPassWord] = useState('')
  const getUser = async()=>{
    return await fetch('https://670955e3af1a3998baa13006.mockapi.io/Users')
    .then((reponse)=>reponse.json())
    .then((json)=>{
      return json
    })
    .catch((error)=>{
      console.log(error)
    })

  }
  return (
    <SafeAreaView>
      <Text style={{fontSize:40,alignSelf:'center'}}>
     WellCome
      </Text>
      <View>
      <Text style={{paddingHorizontal:10,fontSize:20,fontWeight:'700'}}>Email</Text>
        <Input placeholder="Enter your email" inputContainerStyle={{borderRadius:10,borderWidth:1,paddingHorizontal:5}} inputStyle={{padding:5}} leftIcon={<Icon name="envelope" size={20} />} onChangeText={(text)=>setEmail(text)} />
          <Text style={{paddingHorizontal:10,fontSize:20,fontWeight:'700'}}>Password</Text>
        <Input placeholder="Enter your password" inputContainerStyle={{borderRadius:10,borderWidth:1,paddingHorizontal:5}} inputStyle={{padding:5}} leftIcon={<Icon name="lock" size={20} />} onChangeText={(text)=>setPassWord(text)} />
       </View>
       <View style={{alignItems:'center'}}>
        <Button title="Login" buttonStyle={{width:100}} onPress={()=>{
         getUser().then((users)=>{
           if(email.trim().length===0 || password.trim().length===0)
           {
             alert('Chua nhap email va password')
             return
           }
           const matchUser = users.find((user)=>user.email ===email && user.password === password)
          //  const matchPassWord = users.find((user)=>user.password === password)
           if(matchUser){
             console.log(`Name logined:${matchUser.name} `)
             navigation.navigate("Product")
           }
           else{
             console.log('Pass or Email error')
             alert('Pass or Email was wrong')
           }

         })
        }}/>
       </View>
    </SafeAreaView>
  )
}

export default Login;