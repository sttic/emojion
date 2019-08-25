import React from 'react';
import { Picker, View, Text } from 'react-native';
import LineGraph from '../components/LineGraph';

export default class TrendsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { label: 'Daily', value: 'Daily' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Yearly', value: 'Yearly' }
      ],
      period: undefined
    };
  }

  showGraph() {
    switch (this.state.period) {
      case 'Daily':
        return undefined;
      case 'Monthly':
        return <LineGraph />;
      case 'Yearly':
        return <LineGraph />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={this.state.period}
          style={{
            height: 50,
            width: 200
          }}
          onValueChange={itemValue => this.setState({ period: itemValue })}
        >
          {this.state.options.map(option => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
        {this.showGraph()}
      </View>
    );
  }
}

TrendsScreen.navigationOptions = {
  title: 'Trends'
};
