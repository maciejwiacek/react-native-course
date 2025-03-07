import React, {Component} from 'react';
import {Text} from 'react-native';

class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.name + ' Vacheishvili',
    };
  }

  componentDidMount() {
    // Is called right after the component is rendered
    // Perform some setup for example fetching data from an API
    console.log('Our component has been mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Called when state or props of the application is updated
    console.log(
      'The state of the application has been changed',
      prevState,
      this.state,
    );
  }

  componentWillUnmount() {
    console.log('Component is now being destroyed');
  }

  render() {
    return (
      <Text
        onPress={() =>
          this.setState({...this.state, ...{fullName: 'Nata V.'}})
        }>
        Hello, {this.props.name}! I know that your full name is{' '}
        {this.state.fullName}
      </Text>
    );
  }
}

export default MyText;
