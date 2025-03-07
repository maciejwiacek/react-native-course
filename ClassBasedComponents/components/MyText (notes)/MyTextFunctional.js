import {Text} from 'react-native';
import {useEffect, useState} from 'react';

const MyTextFunctional = props => {
  // this.state = {} + this.setState()
  const [fullName, setFullName] = useState('');

  // componentDidMount
  useEffect(() => {
    console.log('Our component has been mounted');
    // componentWillUnmount
    return () => {
      console.log('Component is now being destroyed');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('The value of fullName has been changed');
  }, [fullName]);

  return (
    <Text
      onPress={() => {
        setFullName('Nata Vacheishvili');
      }}>
      Hello, {props.name}! I know that your full name is {fullName}
    </Text>
  );
};

export default MyTextFunctional;
