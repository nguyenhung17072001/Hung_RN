import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Slider from './assets/components/Slider';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './assets/components/MyStack';
import { Provider } from 'react-redux';
import { store } from './assets/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;