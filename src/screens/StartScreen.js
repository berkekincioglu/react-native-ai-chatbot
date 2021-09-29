import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AiProfileDetail from '../components/AiProfileDetail';
import { Entypo } from '@expo/vector-icons';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AiProfileDetail />
      <Text style={styles.startText}>Click button to start chat</Text>
      <View style={styles.start}>
        <View style={styles.button}>
          <View style={styles.startButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <Entypo
                name='chat'
                size={50}
                color='#999'
                style={{ padding: 50 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  start: {
    flex: 1,
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: '#f4f4f4',
    borderRadius: 100,
    shadowColor: '#999',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1.7,
    shadowRadius: 5.49,
    elevation: 12,
  },
  startText: {
    fontSize: 20,
    margin: 30,
    flex: 0.2,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
