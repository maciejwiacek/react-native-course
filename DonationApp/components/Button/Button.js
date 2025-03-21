import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = ({title, isDisabled = false, onPress = () => {}}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={({pressed}) => [
        style.button,
        isDisabled && style.disabled,
        pressed && {opacity: 0.5},
      ]}
      onPress={() => onPress()}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
