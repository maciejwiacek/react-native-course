import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Input = ({
  label,
  placeholder = null,
  onChangeText = () => {},
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
