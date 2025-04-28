import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function SignUp() {
  return (
    <View 
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        backgroundColor:Colors.WHITE,
        height:'30%'
    }}
    >
      <Image source={require('./../../assets/images/profileIcon.webp')} 
        style={{
            width:180,
            height:180,
        }}
      />
    </View>
  )
}