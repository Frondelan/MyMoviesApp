import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimationComponent from '../components/AnimationComponent';
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

export default function Splash(props) {
  const {navigation} = props;
  const [authLoaded, setAuthLoaded] = useState(false);
  const [vat, setVat] = useState();

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
      <AnimationComponent width={300} height={300} />
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
