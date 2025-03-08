import React, {useState} from 'react';
import {ImageBackground, Switch, Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {BlurView} from '@react-native-community/blur';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showingData, setShowingData] = useState(false);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}
      style={{flex: 1, justifyContent: 'center'}}>
      <BlurView
        style={{
          width: '80%',
          height: 400,
          alignSelf: 'center',
          borderRadius: 40,
          position: 'absolute',
        }}
        blurType={'light'}
        blurAmount={15}
        reducedTransparencyFallbackColor={'white'}
      />
      <View style={{width: '70%', height: 350, alignSelf: 'center'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon icon={faUser} size={30} />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: 10,
            }}>
            Your data!
          </Text>
        </View>
        <TextInput
          placeholder={'Enter your name'}
          placeholderTextColor={'#444'}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#444',
          }}
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          placeholder={'Enter your age'}
          placeholderTextColor={'#444'}
          keyboardType={'numeric'}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#444',
            marginTop: 10,
          }}
          value={age}
          onChangeText={value => setAge(value)}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Switch
            value={showingData}
            onValueChange={value => setShowingData(value)}
          />
          <Text>Show data?</Text>
        </View>
        {showingData && (
          <View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Your name is {name}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Your age is {age}
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default App;
