import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../views/home'
import Camera from '../views/camera'
import ImageDetails from '../views/ImageDetails'

const Stack = createNativeStackNavigator()

export default () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Camera" component={Camera}/>
        <Stack.Screen name="ImageDetails" component={ImageDetails}/>
    </Stack.Navigator>
)