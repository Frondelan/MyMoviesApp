import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import apiPOST from '../api/apiPOST';
import {validateEmail} from '../utils/validations';

export default function useLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [formError, setFormError] = useState({
    emailError: false,
    passwordError: false,
  });

  const navigation = useNavigation();

  const postAction = () => {
    if (email === '' || password === '') {
      setError('No empty spaces');
      if (email === '') {
        setFormError({...formError, emailError: true});
      }
      if (password === '') {
        setFormError({...formError, passwordError: true});
      }
    } else if (!validateEmail(email)) {
      setFormError({...formError, emailError: true});
      setError('Email error');
    } else if (password.length < 5) {
      setFormError({...formError, passwordError: true});
      setError('Password must be more than 5 digits');
    } else if (password !== 'cityslicka') {
      setFormError({...formError, passwordError: true});
      setError('Wrong username or password');
    } else {
      setError('');
      setFormError({emailError: false, passwordError: false});
      apiPOST({email, password})
        .apiDBP.then(response => {
          if (response.data) {
            const data = JSON.stringify(response.data);
            AsyncStorage.setItem('authToken', data);
            navigation.replace('movies');
          }
        })
        .catch(err => {
          setError('Wrong username or password');
          return err;
        });
    }
  };

  return {
    postAction,
    setEmail,
    setPassword,
    error,
  };
}
