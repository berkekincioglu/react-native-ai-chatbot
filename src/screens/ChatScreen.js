import React from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Fragment } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
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
            <ScrollView>{/*Chat will be here */}</ScrollView>
            <View style={styles.footer}>
              <TextInput placeholder='Send Message' style={styles.textInput} />
              <TouchableOpacity>
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
    padding: 20,
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
});
