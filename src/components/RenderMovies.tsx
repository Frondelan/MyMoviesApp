import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import MovieList from './MovieList';

export default function RenderMovies(props) {
  const {movie, navigation} = props;
  const {id, poster_path, title, overview, release_date, vote_average} = movie;

  const goMovie = () => {
    navigation.push('movieData', {id});
  };

  return (
    <TouchableWithoutFeedback onPress={() => goMovie()}>
      <View style={styles.movie}>
        {poster_path ? (
          <>
            <MovieList
              title={title}
              overview={overview}
              release_date={release_date}
              vote_average={vote_average}
              poster_path={poster_path}
            />
          </>
        ) : (
          <>
            <MovieList
              title={title}
              overview={overview}
              release_date={release_date}
              vote_average={vote_average}
            />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  movie: {
    width: '100%',
    height: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#141E61',
  },
});
