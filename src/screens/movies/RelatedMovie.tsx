import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {getMovieByIdApi, getRelatedMoviesApi} from '../../api/api';
import {BASE_PATH_IMG} from '../../utils/constants';
import {map} from 'lodash';

export default function RelatedMovie(props) {
  const {route} = props;
  const {id} = route.params;
  console.log(id);
  const [movie, setMovie] = useState({});
  const mvPath = movie.poster_path;

  useEffect(() => {
    getMovieByIdApi(id).then(response => {
      console.log(response);
      setMovie(response);
    });
  }, []);

  if (!movie) {
    return null;
  }
  return (
    <View>
      <Text>RelatedMovie</Text>
    </View>
  );
}
