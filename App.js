import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Slider from './assets/components/Slider';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;