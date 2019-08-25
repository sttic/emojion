import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { Predictions } from 'aws-amplify';

export default function TrendsScreen() {
  const [response, setResponse] = useState('');
  const [textToInterpret, setTextToInterpret] = useState(
    'write some text here to interpret'
  );

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

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>
            How Amazon Comprehend works behind the screen!
          </Text>
          <TextInput
            value={textToInterpret}
            onChangeText={setText}
            style={styles.input}
          ></TextInput>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={interpretFromPredictions}
          >
            <Text style={styles.buttonText}>ENTER</Text>
          </TouchableOpacity>
          <Text>{response}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

TrendsScreen.navigationOptions = {
  title: 'Demo'
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
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  input: {
    height: 30,
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4dbed8',
    marginTop: 30
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
