import axios from 'axios';

interface Props {
  email: string;
  password: string;
}

export default function apiPOST({email, password}: Props) {
  const apiDBP = axios({
    method: 'post',
    baseURL: 'https://reqres.in/api/login',
    data: {
      email,
      password,
    },
  });
  return {
    apiDBP,
  };
}
