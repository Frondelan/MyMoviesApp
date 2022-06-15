import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {map} from 'lodash';
import {MovieAllData} from '../interfaces/moviesInterface';

interface Props {
  movie: MovieAllData;
}

export default function MovieDescription(props: Props) {
  const {movie} = props;

  return (
    <>
      <Text style={styles.titleM}>{movie.title}</Text>
      <View style={styles.genreContent}>
        <Text style={styles.textDateT}>Genres</Text>
        <View style={styles.containerG}>
          {map(movie.genres, genre => (
            <Text key={genre.id} style={styles.genre}>
              {genre.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.topContent}>
        <Text style={styles.textDateT}>
          Release date{'\n'}
          <Text style={styles.textDate}>{movie.release_date}</Text>
        </Text>
        <Text style={styles.textDateT}>
          Vote average{'\n'}
          <Text style={styles.textDate}>{movie.vote_average}</Text>
        </Text>
      </View>
      <View style={styles.overContent}>
        <Text style={styles.textDateT}>Overview</Text>
        <Text style={styles.text}>{movie.overview}</Text>
      </View>
      <View style={styles.topContent}>
        <Text style={styles.textDateT}>
          Revenue{'\n'}
          <Text style={styles.textDate}>
            {'$ '}
            {movie.revenue}
          </Text>
        </Text>
        <Text style={styles.textDateT}>
          Popularity{'\n'}
          <Text style={styles.textDate}>{movie.popularity}</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141E61',
  },
  titleM: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 21,
    marginBottom: 20,
  },
  genreContent: {
    marginHorizontal: 30,
  },
  containerG: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 10,
    color: '#8697A5',
    fontSize: 17,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 20,
  },
  textDateT: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 17,
    textAlign: 'left',
    color: '#14C38E',
    fontWeight: 'bold',
  },
  textDate: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 17,
    textAlign: 'left',
    color: '#fff',
    fontWeight: 'bold',
  },
  overContent: {
    marginHorizontal: 30,
  },
  text: {
    color: '#fff',
    fontSize: 15,
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
