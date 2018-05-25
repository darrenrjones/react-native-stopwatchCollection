import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Datastore from 'react-native-local-mongodb';
import Stopwatch from './stopwatch';

export default class App extends React.Component {
  constructor(props){
    super(props);

    datastore = new Datastore();
  }

  render() {
    return (
      <View style={styles.container}>
        <Stopwatch />
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
