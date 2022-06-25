import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import useSearch from '../../hooks/useSearch';
import MovieList from '../../components/MovieList';
import BackButton from '../../components/BackButton';
import AnimationComponent from '../../components/AnimationComponent';

export default function SearchMovie(props: any) {
  const {route} = props;

  const {isLoading, noData, searchMovies} = useSearch(route.params);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <AnimationComponent imgName="loading" width={300} height={300} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.topic}>{route.params}</Text>
      </View>
      {noData && (
        <View style={styles.indicator2}>
          <Text style={styles.noData}>
            There are no results for this search
          </Text>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerRelated}>
          {searchMovies?.map(value => (
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
  indicator2: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E61',
  },
  noData: {
    color: '#14C38E',
    fontSize: 19,
    fontWeight: 'bold',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#141E61',
  },
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E61',
  },
  topic: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 5,
  },
  containerRelated: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
