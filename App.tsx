import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { BottomNavigation, Text, Provider as PaperProvider } from 'react-native-paper';
import {NativeRouter, Route, Routes} from 'react-router-native';
import BottomSheetiInitilization from './BottomSheetInitilization';
import { store } from './redux/store';
import Login from './screens/Login';
import {Provider} from 'react-redux';
import PhotoScreen from './screens/PhotoScreen';
import Home from './screens/Home';


export default function App() {
  
  return (
    <Provider store={store}>
     <PaperProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/BottomInit" element={<BottomSheetiInitilization />} />
        </Routes>
      </NativeRouter>
      </PaperProvider>
    </Provider>
  );
}

