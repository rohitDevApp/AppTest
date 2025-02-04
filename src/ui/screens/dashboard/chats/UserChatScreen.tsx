import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GlobalStyle} from '@ui/styles/global';
import {GiftedChat} from 'react-native-gifted-chat';
import UserChatHeader from './UserChatHeader';
import socketServices from '@utils/socketService';
import {RECIVED_MESSAGE, SEND_MESSAGE} from '@constants/enum/webSocket'; //Same as it Backend

const UserChatScreen = () => {
  const [messages, setMessages] = useState<any>([]);
  const [data, setData] = useState([]);

  //When Recived message
  useEffect(() => {
    socketServices.on(RECIVED_MESSAGE, (newMessages: any) => {
      console.log('message Received ', newMessages);
      setData([...data].concat(newMessages));
    });
  }, [data]);

  //send Message
  const onSend = useCallback(
    (allMessages: any = []) => {
      if (messages.length > 0) {
        setMessages((previousMessages: any) =>
          GiftedChat.append(previousMessages, allMessages),
        );
        socketServices.emit(SEND_MESSAGE, messages);
      }
    },
    [messages],
  );

  return (
    <View style={[GlobalStyle.flex]}>
      <UserChatHeader
        user={{
          name: 'Rohit',
          status: 'Online',
          image: '',
        }}
      />
      <GiftedChat
        messages={messages}
        onSend={(allMessages: any) => onSend(allMessages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default React.memo(UserChatScreen);
