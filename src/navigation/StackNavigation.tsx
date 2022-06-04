import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Movies from '../screens/movies/Movies';
import MovieData from '../screens/movies/MovieData';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="movies"
          component={Movies}
          options={{
            title: 'MOVIES HOME',
          }}
        />
        <Stack.Screen
          name="movieData"
          component={MovieData}
          options={{title: 'MOVIE DATA '}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
