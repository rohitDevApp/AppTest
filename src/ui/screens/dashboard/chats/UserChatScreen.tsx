import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {GlobalStyle} from '@ui/styles/global';
import {GiftedChat} from 'react-native-gifted-chat';
import UserChatHeader from './UserChatHeader';

const UserChatScreen = () => {
  // const data = route?.params?.data;
  //   console.log(data);
  const [messages, setMessages] = useState<any>([]);

  //send Message
  const onSend = useCallback((allMessages: any = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, allMessages),
    );
  }, []);

  return (
    <View style={[GlobalStyle.flex]}>
      {/* <ChatHeadScreen
        user={{name: 'Rohit', status: 'Online', image: data?.image ?? ''}}
      /> */}
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
