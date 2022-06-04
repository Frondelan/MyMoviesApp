import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

export default function Splash(props) {
  const {navigation} = props;
  const [authLoaded, setAuthLoaded] = useState(false);
  const [vat, setVat] = useState();

  console.log('ESTOY EN SPLASH');

  useEffect(() => {
    setTimeout(() => {
      getTokenValue();
    }, 2300);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      if (vat) {
        navigation.replace('movies');
      } else {
        navigation.replace('login');
      }
    }
  }, [authLoaded, navigation]);

  const getTokenValue = () => {
    AsyncStorage.getItem('authToken').then(value => {
      setVat(value);
      setAuthLoaded(true);
      return;
    });
  };

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require('../assets/mov.json')}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lottie: {
    width: 500,
    height: 300,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
