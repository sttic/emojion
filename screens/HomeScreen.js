import React from 'react';
import {
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

import MessageListItem from '../components/MessageListItem';

import { connect } from 'react-redux';
import { sendMessage } from '../actions/actions';

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
              color: Colors.secondary,
              paddingTop: 50,
              textAlign: 'center',
              fontSize: 32,
              fontWeight: 'bold'
            }}
          >
            WHOLESOME-ME
          </Text>

          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/images/users/max.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 8,
              marginBottom: 16
            }}
          >
            Max Smith
          </Text>

          <List>
            {this.orderedMessages().map((messenger, index) => (
              <TouchableOpacity
                key={`${index}${JSON.stringify(messenger)}`}
                onPress={() =>
                  this.props.navigation.navigate('Chat', {
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
    marginTop: 20,
    marginBottom: 20,
    marginRight: 16
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 30
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 4
  }
});
