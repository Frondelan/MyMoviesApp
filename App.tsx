import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141E61" />
      <StackNavigation />
    </>
  );
}
