/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Root from './src';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  );
};

export default App;
