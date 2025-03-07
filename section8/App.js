import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Text, ScrollView, Button, View} from 'react-native';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';
import useToggle from './customHooks/useToggle';

const App = () => {
  // useEffect(() => {
  //   console.log('Component has been rendered.');
  // }, []);

  // let array = Array(1000).fill(0);
  // const scrollViewRef = useRef(null);
  // const handleClick = () => {
  //   scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  // };

  const [isDarkMode, toggleIsDarkMode] = useToggle(false);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        {/*<ScrollView ref={scrollViewRef}>*/}
        {/*  {array.map((item, index) => (*/}
        {/*    <Text key={index}>Hello World {index + 1}!</Text>*/}
        {/*  ))}*/}
        {/*</ScrollView>*/}
        {/*<Button onPress={handleClick} title={'Scroll to Top'} />*/}
        <View style={{backgroundColor: isDarkMode ? '#222' : '#fff'}}>
          <Text style={{color: isDarkMode ? '#fff' : '#222'}}>
            Hello World!
          </Text>
          <Button onPress={toggleIsDarkMode} title={'Toggle Theme'} />
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
