import React, {FC} from 'react';
import LayoutScreen from '@ui/components/layout/LayoutScreen';
import ShowUser from './ShowUser';
import ChatHeader from './ChatHeader';

const ChatScreen: FC = () => {
  return (
    <LayoutScreen>
      <ChatHeader />
      <ShowUser />
      {/* <AddUser /> */}
    </LayoutScreen>
  );
};

export default React.memo(ChatScreen);
