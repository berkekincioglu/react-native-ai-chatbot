import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <View style={styles.container}>
          <Text style={styles.text}>Click here to start</Text>
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
  },
  button: {
    marginTop: 60,
    width: 200,
    height: 200,
    backgroundColor: '#999',
    borderRadius: 100,
    shadowColor: 'black',
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10.49,
    elevation: 12,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
