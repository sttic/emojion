import React from "react";
import {
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import { List } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import MessageListItem from "../components/MessageListItem";

import { connect } from "react-redux";
import { sendMessage } from "../actions/actions";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  orderedMessages() {
    let messages = this.props.chat;
    return Object.keys(messages)
      .map(key => messages[key][0])
      .sort((a, b) => a.createdAt < b.createdAt);
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView style={styles.container}>
          <Text
            style={{
              paddingTop: 50,
              textAlign: "center",
              fontSize: 32,
              fontWeight: "bold"
            }}
          >
            EMOJION
          </Text>

          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../assets/images/jen.png")}
              />
              <View
                style={{
                  alignItems: "center",
                  width: 42,
                  height: 42,
                  position: "absolute",
                  right: -8,
                  bottom: -8,
                  backgroundColor: "lightgrey",
                  borderRadius: 26
                }}
              >
                <Icon
                  name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
                  size={24}
                  color="white"
                  style={{ paddingTop: 8 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <List>
            {this.orderedMessages().map((messenger, index) => (
              <TouchableOpacity
                key={`${index}${JSON.stringify(messenger)}`}
                onPress={() =>
                  this.props.navigation.navigate("Chat", {
                    username: messenger.user.username,
                    name: messenger.user.name,
                    avatar: messenger.user.avatar,
                    avatar2: messenger.user.avatar2,
                    lastMessage: messenger.text,
                    lastDate: messenger.createdAt
                  })
                }
              >
                <MessageListItem
                  largeAvatar={messenger.user.avatar}
                  smallAvatar={messenger.user.avatar2}
                  name={messenger.user.name}
                  date={messenger.createdAt}
                  message={messenger.text}
                />
              </TouchableOpacity>
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30
  },
  input: {
    height: 55,
    backgroundColor: "#eee",
    marginBottom: 20,
    color: "#000",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  label: {
    color: "black",
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  inputIcon: {
    position: "absolute",
    top: 37,
    right: 18,
    zIndex: 1,
    opacity: 0.5,
    color: "green"
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#4db8c7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonContainerDisabled: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#4db8c7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    opacity: 0.5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginVertical: 30
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
