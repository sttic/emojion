import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Predictions } from 'aws-amplify';

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
          <Text style={styles.title2}>
            Predominant sentiment:{' '}
            {response
              ? JSON.parse(response).textInterpretation.sentiment.predominant
              : null}
          </Text>
          <Text>
            positive:{' '}
            {response
              ? JSON.parse(response).textInterpretation.sentiment.positive
              : null}
          </Text>
          <Text>
            negative:{' '}
            {response
              ? JSON.parse(response).textInterpretation.sentiment.negative
              : null}
          </Text>
          <Text>
            neutral:{' '}
            {response
              ? JSON.parse(response).textInterpretation.sentiment.neutral
              : null}
          </Text>
          <Text>
            mixed:{' '}
            {response
              ? JSON.parse(response).textInterpretation.sentiment.mixed
              : null}
          </Text>
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
    marginVertical: 10
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
