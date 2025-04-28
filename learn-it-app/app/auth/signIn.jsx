import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View>
      <Image source={require('./../../assets/images/profileIcon.webp')} 
        style={{
            width:80,
            height:80,
        }}
      />

    </View>
  )
}