import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Fragment } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ChatScreen = () => {
  const [message, setMessage] = useState([]);
  const [textMessage, setTextMessage] = useState([]);
  const [id, setId] = useState(0);
  const onSend = async (text) => {
    const response =
      await axios.get(`http://api.brainshop.ai/get?bid=160219&key=${process.env.KEY}&uid=meshape&msg=
      ${text}
    `);
    console.log(
      '----------------------------------------------------------------'
    );
    setTextMessage((prevState) => {
      return [...prevState, { response: response.data.cnt, text, id }];
    });

    setId(id + 1);
  };
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Ionicons name='chevron-back-outline' size={24} color='black' />
        </TouchableOpacity>
      ),
      title: null,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Fragment>
            <ScrollView>
              <FlatList
                data={textMessage}
                renderItem={({ item }) => {
                  // console.log(item);
                  return (
                    item && (
                      <View>
                        <View style={styles.sender}>
                          <Text>{item.text}</Text>
                        </View>
                        <View style={styles.receiver}>
                          <Text>{item.response}</Text>
                        </View>
                      </View>
                    )
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                onChangeText={(el) => {
                  setMessage(el);
                }}
                value={message}
                placeholder='Send Message'
                style={styles.textInput}
              />
              <TouchableOpacity onPress={() => onSend(message)}>
                <Ionicons name='send' size={24} color='black' />
              </TouchableOpacity>
            </View>
          </Fragment>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

//When send message
// Keyboard.hide()

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textInput: {
    fontSize: 20,
    borderRadius: 30,
    borderColor: 'transparent',
    borderWidth: 1,
    marginHorizontal: 5,
    width: '90%',
    height: 50,
    flex: 1,
    padding: 10,
    color: 'black',
    backgroundColor: '#ECECEC',
  },
  receiver: {
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    marginTop: 5,
    maxWidth: '80%',
    position: 'relative',
  },
  sender: {
    padding: 15,
    backgroundColor: '#ffb3b3',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 20,
    maxWidth: '80%',
    position: 'relative',
  },
});
