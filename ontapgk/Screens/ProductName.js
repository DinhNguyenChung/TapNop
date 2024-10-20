import{View,SafeAreaView,Text} from 'react-native'
import {Button} from 'react-native-elements'

const Product=({navigation})=>{
  return (
    <SafeAreaView>
     <View style={{justifyContent:'center',alignItems:'center' }}>
     <Text>
      Product
     </Text>
     </View>
    </SafeAreaView>
  )
}

export default Product