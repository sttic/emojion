import React from "react";
import { View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";
import Colors from "../constants/Colors";

import { connect } from "react-redux";
import { sendMessage } from "../actions/actions";

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    state = {
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
      messages: this.props.chat[
        this.props.navigation.state.params.username
      ].slice()
    });
  }

  onSend(messages = []) {
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

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(ChatScreen);
