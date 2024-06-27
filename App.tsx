import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {Button, Text, View} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Button
        title="go to Settings"
        onPress={() => navigation.navigate('Settings')}>
        Setting
      </Button>
      <Text>hola settings</Text>
    </View>
  )
}
const Settings = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')}>
        Home
      </Button>
      <Text> hola settings</Text>
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App
