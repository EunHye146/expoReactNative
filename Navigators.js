// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Content1 from './pages/Menu1/Content1';
import Content2 from './pages/Menu1/Content2';
import Content3 from './pages/Menu2/Content3';
import Content4 from './pages/Menu2/Content4';
import Content5 from './pages/Menu3/Content5';
import Content6 from './pages/Menu3/Content6';
import Content7 from './pages/Menu4/Content7';
import Content8 from './pages/Menu4/Content8';
import Content9 from './pages/Menu5/Content9';
import Content10 from './pages/Menu5/Content10';


const Stack = createNativeStackNavigator();

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Content1" component={Content1} />
        <Stack.Screen name="Content2" component={Content2} />
        <Stack.Screen name="Content3" component={Content3} />
        <Stack.Screen name="Content4" component={Content4} />
        <Stack.Screen name="Content5" component={Content5} />
        <Stack.Screen name="Content6" component={Content6} />
        <Stack.Screen name="Content7" component={Content7} />
        <Stack.Screen name="Content8" component={Content8} />
        <Stack.Screen name="Content9" component={Content9} />
        <Stack.Screen name="Content10" component={Content10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;