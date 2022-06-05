import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {getMovieByIdApi, getRelatedMoviesApi} from '../../api/api';
import {map} from 'lodash';
import MovieImage from '../../components/MovieImage';
import MovieDescription from '../../components/MovieDescription';
import RenderMovies from '../../components/RenderMovies';

export default function MovieData(props) {
  const {route, navigation} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState({});
  const [related, setRelated] = useState(null);

  useEffect(() => {
    getMovieByIdApi(id).then(response => {
      setMovie(response);
    });
  }, []);

  useEffect(() => {
    getRelatedMoviesApi(id).then(response => {
      setRelated(response.results);
    });
  }, []);

  if (!movie) {
    return null;
  }
  if (!related) {
    return null;
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MovieImage movie={movie} />
      <View>
        <MovieDescription movie={movie} />
      </View>
      <View style={styles.relatedMoviesContainer}>
        <Text style={styles.relatedTopic}>RELATED MOVIES</Text>
        <View style={styles.containerRelated}>
          {map(related, (relateds, index) => (
            <RenderMovies
              key={index}
              movie={relateds}
              navigation={navigation}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
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
