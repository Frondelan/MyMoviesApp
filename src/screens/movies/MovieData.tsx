import React from 'react';
import {ScrollView, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import MovieImage from '../../components/MovieImage';
import MovieDescription from '../../components/MovieDescription';
import useDetail from '../../hooks/useDetail';
import MovieList from '../../components/MovieList';
import BackButton from '../../components/BackButton';
import AnimationComponent from '../../components/AnimationComponent';

export default function MovieData({route}: any) {
  const {isLoading, movieDetails, relatedMovies} = useDetail(route.params);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <AnimationComponent imgName="loading" width={300} height={300} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}>
        <MovieImage movie={movieDetails} />
        <View>
          <MovieDescription movie={movieDetails!} />
        </View>
        {relatedMovies.length > 0 && (
          <View style={styles.relatedMoviesContainer}>
            <Text style={styles.relatedTopic}>SIMILAR MOVIES</Text>
          </View>
        )}
        <View style={styles.containerRelated}>
          {relatedMovies.map(value => (
            <MovieList
              key={value.id.toString() + value.vote_count.toString}
              movie={value}
            />
          ))}
        </View>
      </ScrollView>
      <BackButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E61',
  },
  container: {
    backgroundColor: '#141E61',
  },
  containerScroll: {
    backgroundColor: '#141E61',
  },
  relatedMoviesContainer: {
    marginTop: 50,
  },
  relatedTopic: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  containerRelated: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
