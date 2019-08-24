import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { ListItem, Left, Body, Thumbnail, Text } from 'native-base';

export default function MessageListItem(props) {
  return (
    <ListItem avatar>
      <Left style={{ width: 64 }}>
        <Thumbnail />
        <Image source={props.largeAvatar} style={largeAvatar} />
        <Image source={props.smallAvatar} style={smallAvatar} />
      </Left>
      <Body>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{fontSize: 17}}>{props.name}</Text>
          <Text note>{convertToTimeString(props.date)}</Text>
        </View>
        <Text note numberOfLines={2} style={{fontSize: 15}}>
          {props.message + "\n"}
        </Text>
      </Body>
    </ListItem>
  );
}

function convertToTimeString(date) {
  const now = new Date();
  if (now - date < 24 * 60 * 60 * 1000) {
    return `${date.getHours() % 12 === 0 ? '12' : date.getHours() % 12}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    } ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
  } else {
    switch (date.getDay()) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
    }
  }
}

const largeAvatar = {
  height: 60,
  width: 60,
  position: 'absolute',
  left: -5,
  top: 10,
  borderRadius: 50
};

const smallAvatar = {
  height: 40,
  width: 40,
  position: 'absolute',
  right: -5,
  bottom: -5,
  borderRadius: 50,
  borderWidth: 3,
  borderColor: '#edfcff'
};

MessageListItem.propTypes = {
  largeAvatar: PropTypes.number.isRequired,
  smallAvatar: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  message: PropTypes.string.isRequired
};
