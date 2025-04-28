import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { useRouter } from 'expo-router';


const Index = () => {

  const router = useRouter();

  return (
    <View 
      style={{
        flex:1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image source = {require('.././assets/images/art-attack-ocLaBziBEPs-unsplash.png')} 
        style={{
          width:'100%',
          height: 380,
          marginTop:70
        }}
      />
      <View 
        style={{
          padding:25,
          backgroundColor: Colors.PRIMARY,
          height:'100%',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text
          style={{
            fontSize:35,
            fontWeight:'bold',
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'raleway-bold',
          }}
        >Welcome to Ben's App</Text>
        <Text
          style={{
            fontSize:20,
            color:Colors.WHITE,
            marginTop:20,
            textAlign:'center',
            fontFamily:'raleway',
          }}
        >Get started today on accomplishing your next exciting goal!</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={ ()=> router.push('/auth/signUp')}
        >
          <Text style={[styles.buttonText, {color:Colors.PRIMARY}]}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={[styles.button, {
            backgroundColor:Colors.PRIMARY,
            borderWidth:1,
            borderColor:Colors.WHITE
          }]}
          onPress={ ()=> router.push('/auth/signIn')}
        >
          <Text style={[styles.buttonText, {color:Colors.WHITE}]}>Already created an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  button : {
    padding:15,
    backgroundColor:Colors.WHITE,
    marginTop:20,
    borderRadius:10,
  },
  buttonText : {
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'raleway'
  }

});
