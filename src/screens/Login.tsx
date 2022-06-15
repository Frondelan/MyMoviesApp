import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimationComponent from '../components/AnimationComponent';
import useLogin from '../hooks/useLogin';

export default function Login() {
  const {postAction, setEmail, setPassword, error} = useLogin();

  //   {
  //     eve.holt@reqres.in
  //      cityslicka
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.logo}>
        <AnimationComponent imgName="mov" width={150} height={150} />
      </View>
      <Text style={styles.errorMess}>{error}</Text>
      <View>
        <TextInput
          style={[styles.input]}
          placeholder="email"
          placeholderTextColor="#000"
          underlineColorAndroid={'transparent'}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="password"
          placeholderTextColor="#000"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          onChange={e => setPassword(e.nativeEvent.text)}
          onSubmitEditing={() => postAction()}
        />
        <TouchableOpacity style={styles.btn} onPress={() => postAction()}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141E61',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
  errorMess: {
    color: '#D61C4E',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 45,
    marginTop: 20,
    padding: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  btn: {
    width: 300,
    marginTop: 27,
    backgroundColor: '#14C38E',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  error: {
    borderColor: '#D61C4E',
    borderWidth: 2,
    color: '#000',
  },
});
