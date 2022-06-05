import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {validateEmail} from '../utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimationComponent from '../components/AnimationComponent';

export default function Login(props) {
  const {navigation} = props;
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [vatError, setVatError] = useState({});

  //   {
  //     "email": "eve.holt@reqres.in",
  //     "password": "cityslicka"
  // }

  function postAction() {
    let errors = {};
    if (!formData.email || !formData.password) {
      setVatError({...vatError, mensaje: 'No empty spaces'});
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
      setVatError({...vatError, mensaje: 'Email error'});
    } else if (formData.password.length < 6) {
      errors.password = true;
      setVatError({
        ...vatError,
        mensaje: 'Password must be more than 5 digits',
      });
    } else {
      setVatError('');
      const options = {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      };
      fetch('https://reqres.in/api/login', options)
        .then(result => {
          return result.json();
        })
        .then(response => {
          if (response.token) {
            const data = JSON.stringify(response);
            AsyncStorage.setItem('authToken', data);
            navigation.replace('movies');
          } else {
            setVatError({...vatError, mensaje: 'Wrong username or password'});
          }
        });
    }
    setFormError(errors);
  }

  return (
    <View style={styles.container}>
      <AnimationComponent width={200} height={200} />
      <Text style={styles.errorMess}>{vatError.mensaje}</Text>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="email"
        placeholderTextColor="#000"
        underlineColorAndroid={'transparent'}
        onChange={e => setFormData({...formData, email: e.nativeEvent.text})}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        underlineColorAndroid={'transparent'}
        onChange={e => setFormData({...formData, password: e.nativeEvent.text})}
        onSubmitEditing={() => postAction()}
      />
      <TouchableOpacity style={styles.btn} onPress={postAction}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
    marginTop: -250,
    marginBottom: -50,
  },
  errorMess: {
    color: '#D61C4E',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '85%',
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#14C38E',
    width: '85%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
