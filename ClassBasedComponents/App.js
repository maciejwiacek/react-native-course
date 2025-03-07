import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [dt, setDt] = useState(new Date());

  useEffect(() => {
    // Executes a function repeatedly at a specified internal (ms)
    // If the component unmounts before the interval is stopped cause leaks
    const interval = setInterval(() => {
      setDt(() => new Date());
    }, 1000);

    // Clears interval to prevent memory leaks
    return () => clearInterval(interval);
  }, [dt]);

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <View style={{backgroundColor: '#222', width: '100%', height: '100%'}}>
      <SafeAreaView>
        <Text style={styles.date}>
          {dt.toLocaleDateString('en-US', options)}
        </Text>
        <Text style={styles.time}>{dt.toLocaleTimeString('en-GB')}</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  time: {
    marginHorizontal: 'auto',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ddd',
  },
  date: {
    marginHorizontal: 'auto',
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#aaa',
  },
});
