import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Detail from './src/features/Detail/DetailScreen'
import Forgot from './src/features/ForgotPasswordScreen/ForgotPasswordScreen'
import Home from './src/features/HomeScreen/HomeScreen'
import Login from './src/features/LoginScreen/LoginScreen'
import Register from './src/features/RegisterScreen/RegisterScreen'

const AuthStack = createNativeStackNavigator()
const Auth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Forgot" component={Forgot} />
    </AuthStack.Navigator>
  )
}

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name="AuthStack" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Register/>
  )
}

export default App
