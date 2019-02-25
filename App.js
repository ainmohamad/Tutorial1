import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My name is Nur ain mohamad</Text>
        <Text>Matric number: 1620510</Text>
        <Text>My name is Nur Syarra Shazida bt Mat Zaini</Text>
        <Text>Matric number: 1627542</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
