import React from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import LineGraph from '../components/LineGraph';
import Colors from '../constants/Colors';

export default class TrendsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { label: 'Daily', value: 'Daily' },
        { label: 'Yearly', value: 'Yearly' }
      ],
      period: undefined
    };

    this.positiveData = [
      { x: 'Jan', y: 45 },
      { x: 'Feb', y: 67 },
      { x: 'Mar', y: 94 },
      { x: 'Apr', y: 145 },
      { x: 'May', y: 177 },
      { x: 'Jun', y: 177 },
      { x: 'Jul', y: 177 },
      { x: 'Aug', y: 177 },
      { x: 'Sep', y: 177 },
      { x: 'Oct', y: 177 },
      { x: 'Nov', y: 177 },
      { x: 'Dec', y: 177 }
    ];
    this.negativeData = [
      { x: 'Jan', y: 42 },
      { x: 'Feb', y: 42 },
      { x: 'Mar', y: 42 },
      { x: 'Apr', y: 42 },
      { x: 'May', y: 42 },
      { x: 'Jun', y: 42 },
      { x: 'Jul', y: 42 },
      { x: 'Aug', y: 42 },
      { x: 'Sep', y: 42 },
      { x: 'Oct', y: 42 },
      { x: 'Nov', y: 42 },
      { x: 'Dec', y: 42 }
    ];
    this.mixedData = [
      { x: 'Jan', y: 30 },
      { x: 'Feb', y: 200 },
      { x: 'Mar', y: 170 },
      { x: 'Apr', y: 250 },
      { x: 'May', y: 10 },
      { x: 'Jun', y: 10 },
      { x: 'Jul', y: 10 },
      { x: 'Aug', y: 10 },
      { x: 'Sep', y: 10 },
      { x: 'Oct', y: 10 },
      { x: 'Nov', y: 10 },
      { x: 'Dec', y: 10 }
    ];
    this.neutralData = [
      { x: 'Jan', y: 20 },
      { x: 'Feb', y: 100 },
      { x: 'Mar', y: 140 },
      { x: 'Apr', y: 550 },
      { x: 'May', y: 40 },
      { x: 'Jun', y: 40 },
      { x: 'Jul', y: 40 },
      { x: 'Aug', y: 40 },
      { x: 'Sep', y: 40 },
      { x: 'Oct', y: 40 },
      { x: 'Nov', y: 40 },
      { x: 'Dec', y: 40 }
    ];
  }

  showGraph() {
    switch (this.state.period) {
      case 'Daily':
        return (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.title2}>Predominant sentiment: </Text>
            <Text style={styles.title3}>POSITIVE</Text>
            <Text>Positive: 0.47</Text>
            <ProgressBar progress={0.47} color={'#4dbed8'} />
            <Text>Negative: 0.2</Text>
            <ProgressBar progress={0.2} color={'#4dbed8'} />
            <Text>Neutral: 0.34</Text>
            <ProgressBar progress={0.34} color={'#4dbed8'} />
            <Text>Mixed: 0.17</Text>
            <ProgressBar progress={0.17} color={'#4dbed8'} />
          </View>
        );
      case 'Yearly':
        return (
          <View>
            <LineGraph
              data={[
                {
                  seriesName: 'positive',
                  data: this.positiveData,
                  color: Colors.sentiment.positive
                },
                {
                  seriesName: 'negative',
                  data: this.negativeData,
                  color: Colors.sentiment.negative
                },
                {
                  seriesName: 'mixed',
                  data: this.mixedData,
                  color: Colors.sentiment.mixed
                },
                {
                  seriesName: 'neutral',
                  data: this.neutralData,
                  color: Colors.sentiment.neutral
                }
              ]}
            />
            <View style={{ marginTop: 16 }}>
              {Object.keys(Colors.sentiment).map(key => (
                <View
                  key={key}
                  style={{
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingHorizontal: 16
                  }}
                >
                  <View
                    style={{
                      height: 8,
                      width: 8,
                      backgroundColor: Colors.sentiment[key],
                      borderRadius: 4,
                      margin: 8
                    }}
                  />
                  <Text>{key}</Text>
                </View>
              ))}
            </View>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={this.state.period}
          style={{
            marginTop: 16,
            marginBottom: 16,
            alignSelf: 'center',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  contentContainer: {
    paddingTop: 80
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  title2: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15
  },
  title3: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15
  },
  msg: {
    borderColor: '#4dbed8',
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    borderRadius: 5
  },
  buttonContainer: {
    marginVertical: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4dbed8',
    borderRadius: 5,
    width: 100,
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
