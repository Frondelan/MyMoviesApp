import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {BASE_PATH_IMG} from '../utils/constants';

export default function MovieImage(props: any) {
  const {movie} = props;
  const mvPath = movie.poster_path;

  if (!movie) {
    return null;
  }
  return (
    <View>
      <Image
        style={styles.poster}
        source={
          mvPath
            ? {uri: `${BASE_PATH_IMG}/w500${mvPath}`}
            : require('../assets/images/404Header.png')
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 500,
  },
});
