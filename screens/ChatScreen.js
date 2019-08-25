import React from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Colors from '../constants/Colors';

import { connect } from 'react-redux';
import { sendMessage } from '../actions/actions';
import { Predictions } from 'aws-amplify';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      response: '',
      textToInterpret: '',
      negative: 0,
      modalVisible: false
    };

    this.onSend = this.onSend.bind(this);
  }

  interpretFromPredictions = textToInterpret => {
    textToInterpret
      ? Predictions.interpret({
          text: {
            source: {
              text: textToInterpret,
              language: 'en'
            },
            type: 'SENTIMENT'
          }
        })
          .then(result =>
            this.setState({ response: JSON.stringify(result, null, 2) })
          )
          .catch(err =>
            this.setState({ response: JSON.stringify(err, null, 2) })
          )
      : null;
  };

  setText = text => {
    this.setState({ textToInterpret: text });
  };

  static navigationOptions({ navigation }) {
    return {
      headerTitle: navigation.state.params.name,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Trends')}>
          <Icon
            name={
              Platform.OS === 'ios'
                ? 'ios-information-circle-outline'
                : 'md-information-circle-outline'
            }
            size={28}
            color="grey"
            style={{ paddingRight: 16 }}
          />
        </TouchableOpacity>
      )
    };
  }

  componentWillMount() {
    this.setState({
      messages: this.props.chat[
        this.props.navigation.state.params.username
      ].slice()
    });
  }

  onSend(messages = []) {
    this.setState({
      textToInterpret: messages[0].text
    });

    this.props.sendMessage(
      this.props.navigation.state.params.username,
      messages[0]._id,
      messages[0].createdAt,
      messages[0].text,
      {
        avatar: this.props.navigation.state.params.avatar,
        avatar2: this.props.navigation.state.params.avatar2,
        name: this.props.navigation.state.params.name,
        username: this.props.navigation.state.params.username,
        ...messages[0].user
      }
    );

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    this.interpretFromPredictions(this.state.textToInterpret);
    console.log("response" + this.state.response);
    this.state.response
      ? this.setState({
          negative: Number(
            JSON.parse(this.state.response).textInterpretation.sentiment
              .negative
          )
        })
      : null;

    this.state.negative > 0.6 ? alert("This message has been detected as overly negative. Please use more positive words in the future.") : null;
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.primary
          }
        }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          renderBubble={this.renderBubble}
          onLongPress={(ctx, currentMessage) =>
            this.props.navigation.navigate('MsgSent', {
              msg: currentMessage.text
            })
          }
        />
        <KeyboardSpacer topSpacing={-50} />
        {this.state.modalVisible ? (
          <StyledModal visible={true} index={this.state.currentIndex} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(ChatScreen);
