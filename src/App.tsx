/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import Home from './views/home';

 const App = () => {

   return (
     <SafeAreaView style={styles.container}>
       <Home></Home>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Colors.lighter
  }
 });

 export default App;
