import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <View className="a-center bg-zinc-900">
      <Text className="text-gray-200">Hello World!</Text>
      <StatusBar style="light" />
    </View>
  )
}

export default Home
