import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/moviesInterface';
import MovieList from './MovieList';

interface Props {
  movie: Movie[];
}

export default function RenderMovies({movie}: Props) {
  return (
    <>
      <View style={styles.movie}>
        <FlatList
          initialNumToRender={7}
          showsVerticalScrollIndicator={false}
          data={movie}
          renderItem={({item}: any) => <MovieList movie={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movie: {
    backgroundColor: '#141E61',
  },
});
