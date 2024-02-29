import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import PersonalScreen from './screens/PersonalScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = (): React.JSX.Element => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition="bottom">
        <Tab.Screen name="Personal" component={PersonalScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
