/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from '../Types';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator<RootStackParams>();
const defaultOption ={
    headerStyle:{
        backgroundColor:'rgba(18,39,113,255)',
    },
    headerTitleStyle:{
        color: '#fff',
    },
    //headerTitleAlign: 'center',
};


const Routes = () =>{
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={defaultOption}  />
                    <Stack.Screen name="Details" component={Details} options= {defaultOption} />
                </Stack.Navigator>
        </NavigationContainer>
        );
};


export default Routes;
