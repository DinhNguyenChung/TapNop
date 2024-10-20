import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({ navigation }) => {
  const [selected,setSelected] = useState(null)
  const sizes= ['XS',"S","M","L","XL"]
  const [tang,setTang] = useState(0)
  const [total,setTotal] = useState(0)
  const [gia,setGia] = useState(500000)
  useEffect(()=>{
     setTotal(tang*gia)
  },[tang,gia])
  const plus=()=>{
    setTang(tang+1)
   
  }
    const minus=()=>{
    if(tang===0) return

    setTang(tang-1)
    
   
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Product Name</Text>
        <View>
          <Text>Size</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           {sizes.map((size)=>(
             <TouchableOpacity
             key={size}
             onPress={()=>setSelected(size)}
              style={[{
                width: 30,
                height: 20,
                backgroundColor: 'white',
                alignItems: 'center',
               
              }, selected === size && {backgroundColor:'cyan'}]}
              
              >
              <Text style={selected ===size && {color:'white'}}>{size}</Text>
            </TouchableOpacity>
           ))}
            
          </View>
        </View>
        <Text>Melon</Text>
        <Text onChangeText={(text)=>setGia(text)}>500000</Text>
       <View style={{flexDirection:'row',width:100,justifyContent:'space-around',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>plus()}>
          <Icon name="plus" />
        </TouchableOpacity>
         <Text>{tang}</Text>
        <TouchableOpacity onPress={()=>minus()}>
          <Icon name="minus" />
        </TouchableOpacity>
       </View>
       <View>
        <Text>Total</Text>
        <Text>{total}</Text>
       </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;
