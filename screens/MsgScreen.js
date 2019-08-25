import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Predictions } from 'aws-amplify';
import { ProgressBar } from 'react-native-paper';
import Colors from '../constants/Colors';

export default function MsgScreen(props) {
  const msg = props.navigation.getParam('msg');

  const [response, setResponse] = useState('');
  const [textToInterpret, setTextToInterpret] = useState(msg);

  interpretFromPredictions = () => {
    Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
          language: 'en'
        },
        type: 'SENTIMENT'
      }
    })
      .then(result => setResponse(JSON.stringify(result, null, 2)))
      .catch(err => setResponse(JSON.stringify(err, null, 2)));
  };

  setText = text => {
    setTextToInterpret(text);
  };

  interpretFromPredictions();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Your text:</Text>
          <Text style={styles.msg}>{msg}</Text>
          <Text style={styles.title2}>Predominant sentiment: </Text>
          <Text style={styles.title3}>
            {response
              ? JSON.parse(response).textInterpretation.sentiment.predominant
              : null}{' '}
          </Text>
          <Text>
            Positive:{' '}
            {response
              ? Math.round(
                  (Number(
                    JSON.parse(response).textInterpretation.sentiment.positive
                  ) /
                    1) * 10000
                ) / 100
              : null} %
          </Text>
          <ProgressBar
            progress={
              response
                ? Number(
                    JSON.parse(response).textInterpretation.sentiment.positive
                  )
                : null
            }
            color={'#4dbed8'}
          />
          <Text>
            Negative:{' '}
            {response
              ? Math.round(
                  (Number(
                    JSON.parse(response).textInterpretation.sentiment.negative
                  ) / 1) * 10000
                ) / 100
              : null} %
          </Text>
          <ProgressBar
            progress={
              response
                ? Number(
                    JSON.parse(response).textInterpretation.sentiment.negative
                  )
                : null
            }
            color={'#4dbed8'}
          />
          <Text>
            Neutral:{' '}
            {response
              ? Math.round(
                  (Number(
                    JSON.parse(response).textInterpretation.sentiment.neutral
                  ) /
                    1) * 10000
                ) / 100
              : null} %
          </Text>
          <ProgressBar
            progress={
              response
                ? Number(
                    JSON.parse(response).textInterpretation.sentiment.neutral
                  )
                : null
            }
            color={'#4dbed8'}
          />
          <Text>
            Mixed:{' '}
            {response
              ? Math.round(
                  (Number(
                    JSON.parse(response).textInterpretation.sentiment.mixed
                  ) /
                    1) * 10000
                ) / 100
              : null} %
          </Text>
          <ProgressBar
            progress={
              response
                ? Number(
                    JSON.parse(response).textInterpretation.sentiment.mixed
                  )
                : null
            }
            color={'#4dbed8'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

MsgScreen.navigationOptions = {
  title: ''
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
