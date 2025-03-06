import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/Item/Item';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <MyText />

      <Item name={'Table'} price={20} />
    </SafeAreaView>
  );
};

export default App;
