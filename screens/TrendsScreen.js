import React from 'react';
import { Picker, View, Text, StyleSheet, ScrollView } from 'react-native';
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
      { x: 'Jan', y: 0.66 },
      { x: 'Feb', y: 0.72 },
      { x: 'Mar', y: 0.55 },
      { x: 'Apr', y: 0.78 },
      { x: 'May', y: 0.80 },
      { x: 'Jun', y: 0.71 },
      { x: 'Jul', y: 0.64 },
      { x: 'Aug', y: 0.83 },
      { x: 'Sep', y: 0.86 },
      { x: 'Oct', y: 0.79 },
      { x: 'Nov', y: 0.88 },
      { x: 'Dec', y: 0.85 }
    ];
    this.negativeData = [
      { x: 'Jan', y: 0.44 },
      { x: 'Feb', y: 0.41 },
      { x: 'Mar', y: 0.32 },
      { x: 'Apr', y: 0.38 },
      { x: 'May', y: 0.38 },
      { x: 'Jun', y: 0.31 },
      { x: 'Jul', y: 0.27 },
      { x: 'Aug', y: 0.33 },
      { x: 'Sep', y: 0.25 },
      { x: 'Oct', y: 0.33 },
      { x: 'Nov', y: 0.28 },
      { x: 'Dec', y: 0.24 }
    ];
    this.mixedData = [
      { x: 'Jan', y: 0.34 },
      { x: 'Feb', y: 0.50 },
      { x: 'Mar', y: 0.45 },
      { x: 'Apr', y: 0.41 },
      { x: 'May', y: 0.48 },
      { x: 'Jun', y: 0.41 },
      { x: 'Jul', y: 0.46 },
      { x: 'Aug', y: 0.42 },
      { x: 'Sep', y: 0.47 },
      { x: 'Oct', y: 0.42 },
      { x: 'Nov', y: 0.40 },
      { x: 'Dec', y: 0.45 }
    ];
    this.neutralData = [
      { x: 'Jan', y: 0.45 },
      { x: 'Feb', y: 0.47 },
      { x: 'Mar', y: 0.41 },
      { x: 'Apr', y: 0.50 },
      { x: 'May', y: 0.42 },
      { x: 'Jun', y: 0.56 },
      { x: 'Jul', y: 0.47 },
      { x: 'Aug', y: 0.52 },
      { x: 'Sep', y: 0.57 },
      { x: 'Oct', y: 0.69 },
      { x: 'Nov', y: 0.62 },
      { x: 'Dec', y: 0.66 }
    ];
  }

  showGraph() {
    switch (this.state.period) {
      case 'Daily':
        return (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ alignSelf: 'center' }}>
              {new Date().toUTCString().substr(0, 16)}
            </Text>
            <Text style={styles.title2}>Predominant sentiment: </Text>
            <Text style={styles.title3}>POSITIVE</Text>
            <Text>Positive: 0.47 %</Text>
            <ProgressBar progress={0.47} color={'#4dbed8'} />
            <Text>Negative: 0.2 %</Text>
            <ProgressBar progress={0.2} color={'#4dbed8'} />
            <Text>Neutral: 0.34 %</Text>
            <ProgressBar progress={0.34} color={'#4dbed8'} />
            <Text>Mixed: 0.17 %</Text>
            <ProgressBar progress={0.17} color={'#4dbed8'} />
          </View>
        );
      case 'Yearly':
        return (
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'rgba(96,100,109, 1)',
                lineHeight: 24,
                textAlign: 'center'
              }}
            >
              Your yearly predominant sentiment
            </Text>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 24,
                textAlign: 'center',
                marginBottom: 15,
                color: Colors.secondary
              }}
            >
              POSITIVE
            </Text>
            <Text style={{ textAlign: 'center', marginBottom: 8 }}>
              Relative sentiment scores
            </Text>
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
        <ScrollView>
          <View style={{ marginVertical: 16 }}>
            <Picker
              selectedValue={this.state.period}
              style={{
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
        </ScrollView>
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
    marginBottom: 15,
    color: Colors.secondary
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
