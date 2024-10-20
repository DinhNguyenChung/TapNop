import{View,SafeAreaView,Text} from 'react-native'
import {Button} from 'react-native-elements'

const Home=({navigation})=>{
  return (
    <SafeAreaView>
     <View style={{justifyContent:'center',alignItems:'center' }}>
      <Button title="SIGNUP" onPress={()=>navigation.navigate('SignUp')} />
     </View>
    </SafeAreaView>
  )
}

export default Home;