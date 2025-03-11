import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './gesture-handler';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
