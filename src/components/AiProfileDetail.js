import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AiProfileDetail = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ai-avatar.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Aco</Text>
    </View>
  );
};

export default AiProfileDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 20,
  },
});
