/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {navigate} from '@utils/NavigaitonFunc';
import {ROUTES} from '@constants/enum/Navigation';

const ShowUser = () => {
  const [users, setUsers] = useState<any>([{}, {}]);
  const [loading, setLoading] = useState(false);

  //show connected user
  useEffect(() => {}, []);

  // Render each user in the list
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      key={item?.id}
      style={styles.userItem}
      // onPress={() => handleUserPress(item.id)}
      onPress={() => navigate(ROUTES.USER_CHAT)}>
      <Image source={{uri: item?.image}} style={styles.userImage} />
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{item?.name}</Text>
        <Text style={styles.userEmail}>{item?.lastMsg}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator animating={true} size={40} color={'lightgreen'} />
        </View>
      ) : users?.length <= 0 ? (
        <View style={{flex: 1}}>
          {/* <Image
            source={require('../assets/Images/EmptyChat.png')}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          /> */}
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item?.id?.toString()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  userItem: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
});

export default ShowUser;
