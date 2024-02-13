/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from '../Types';
import Home from '../screens/Home';
import Details from '../screens/Details';

//Constante que almacena la instancia del objeto Stack.
//El metodo creative...Navigator crea la instancia y mediante el tipado indicamos el tipo de parametros que se pasan entre pantallas.
const Stack = createNativeStackNavigator<RootStackParams>();

//Estilos de la cabecera de pantalla que marca ubicacion(en IOS necesario)/opciones de navegacion.
const defaultOption ={
    headerStyle:{
        backgroundColor:'rgba(18,39,113,255)',
    },
    headerTitleStyle:{
        color: '#fff',
    },
    //headerTitleAlign: 'center',
};

//Componente que contiene mediante React-Navigation (componente) los componentes Home (principal por initialRouteName) y Details.
//Retorna pila de navegacion Stack.Navigator que posee las pantallas (StackScreen) a las que se direcciona.
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
