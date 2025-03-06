import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const MyText = () => {
  const handleTextClick = () => {
    alert('The text has been clicked!');
  };

  return (
    <Text style={styles.text} onPress={() => handleTextClick()}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;
