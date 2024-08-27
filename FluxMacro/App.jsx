import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  Text,
  View, 
  Button,
  useWindowDimensions ,
  Platform,
  StyleSheet,
} from 'react-native';
// tab deps
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// tabs
import { GatherTab } from './src/tabs/Gather';
import { CollectKillTab } from './src/tabs/CollectKill';
// floating deps
// soon perhaps

const Theme={
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: '#589ccb',
    background: '#191919',
    card: '#232323',
    text: '#f3f3f3',
  },
  fonts:{
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'sans-serif',
      fontWeight: '700',
    },
  },
};
export const dropdown_styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#232323',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#191919',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
const Tab=createMaterialTopTabNavigator();

const App=()=>{
  return(<>
    <NavigationContainer theme={Theme}>
      <Tab.Navigator>
        <Tab.Screen name="Gather" component={GatherTab} />
        <Tab.Screen name="Collect/Kill" component={CollectKillTab} />
      </Tab.Navigator>
    </NavigationContainer>
  </>);
};

export default App;