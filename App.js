/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'http://localhost:8080/'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
