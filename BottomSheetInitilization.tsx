import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';
import PhotoScreen from './screens/PhotoScreen';
import TestScreen from './screens/TestScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const BottomSheetiInitilization =  () => {
  const Tab = createMaterialBottomTabNavigator();

  
    return (
        <NavigationContainer >
        <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Photos') {
                iconName = focused ? 'image' : 'image-outline';
              }else if (route.name === 'Test') {
                iconName = focused ? 'school' : 'school-outline';
              }
    
              return <Ionicons name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Photos" component={PhotoScreen} />
          <Tab.Screen name="Test" component={TestScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    )
};

export default BottomSheetiInitilization