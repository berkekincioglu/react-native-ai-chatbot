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
      title: '',
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <Fragment>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput placeholder='Send Message' style={styles.textInput} />
            <TouchableOpacity>
              <Ionicons name='send' size={24} color='black' />
            </TouchableOpacity>
          </View>
        </Fragment>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  textInput: { fontSize: 20 },
});
