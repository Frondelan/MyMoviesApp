import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {LogBox} from 'react-native';
import AnimationComponent from '../components/AnimationComponent';
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

export default function Splash(props: any) {
  const {navigation} = props;
  const [authLoaded, setAuthLoaded] = useState<boolean>(false);
  const [vat, setVat] = useState<string | null>('');

  useEffect(() => {
    setTimeout(() => {
      getTokenValue();
    }, 2300);
  }, []);

  const getTokenValue = () => {
    AsyncStorage.getItem('authToken').then(value => {
      setVat(value);
      setAuthLoaded(true);
      return;
    });
  };

  useEffect(() => {
    if (authLoaded) {
      if (vat) {
        navigation.replace('movies');
      } else {
        navigation.replace('login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLoaded]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AnimationComponent imgName="mov" width={300} height={300} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E61',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
