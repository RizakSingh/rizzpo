import { Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetail = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>subscriptionDetail : {id}</Text>
      <Link href="/"> <Text>Go Home</Text></Link>
    </View>
  )
}

export default SubscriptionDetail

