import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyViewer from './components/Viewer';

export default function App() {
  return (
    <View style={styles.container}>
      <MyViewer document={"https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
