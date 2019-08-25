import React from 'react';
import { View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Colors from '../constants/Colors';

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.onSend = this.onSend.bind(this);
  }

  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.name
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 5,
          text: ':((',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Me'
          }
        },
        {
          _id: 4,
          text: 'cause aws is spying on me',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Lisa Chan',
            avatar: 'http://placekitten.com/128/128'
          }
        },
        {
          _id: 3,
          text: 'why?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Me'
          }
        },
        {
          _id: 2,
          text: 'me too thanks',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Me'
          }
        },
        {
          _id: 1,
          text: 'I want to kms',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Lisa Chan',
            avatar: 'http://placekitten.com/128/128'
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
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
          onLongPress={(ctx, currentMessage) => this.props.navigation.navigate('MsgSent', {
              msg: currentMessage.text
            })}
        />
        <KeyboardSpacer topSpacing={-50} />
      </View>
    );
  }
}
