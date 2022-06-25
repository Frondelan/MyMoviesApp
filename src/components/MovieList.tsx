import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/moviesInterface';
import {BASE_PATH_IMG} from '../utils/constants';

interface Props {
  movie: Movie;
}

export default function MovieList(props: Props) {
  const {movie} = props;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.containerAll}
      activeOpacity={0.4}
      onPress={() => navigation.push('movieData', movie.id)}>
      <Image
        style={styles.image}
        source={{uri: `${BASE_PATH_IMG}/w500${movie.poster_path}`}}
      />
      <View style={styles.textMov}>
        <Text style={styles.textTitle}>{movie.title}</Text>
        <Text style={styles.textOverview}>
          {movie.overview.slice(0, 200)} {'...'}
        </Text>
        <Text style={styles.textDate2}>
          Release date: {'\n'}
          <Text style={styles.textDate}>{movie.release_date}</Text>
        </Text>
        <Text style={styles.textDate2}>
          Vote average: {'\n'}
          <Text style={styles.textDate}>{movie.vote_average}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  containerAll: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: '47%',
    height: '100%',
    marginHorizontal: 10,
  },
  textMov: {
    width: '50%',
  },
  textTitle: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  textOverview: {
    marginRight: 20,
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
    color: '#fff',
  },
  textDate: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
    color: '#fff',
    fontWeight: 'bold',
  },
  textDate2: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
    color: '#14C38E',
    fontWeight: 'bold',
  },
});
