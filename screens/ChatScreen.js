import React from "react";
import { View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

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
            backgroundColor: "#4db8c7"
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
        />
        <KeyboardSpacer topSpacing={-50} />
      </View>
    );
  }
}
