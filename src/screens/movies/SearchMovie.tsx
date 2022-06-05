import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {map} from 'lodash';
import {searchMoviesApi} from '../../api/api';
import RenderMovies from '../../components/RenderMovies';

export default function SearchMovie(props) {
  const {route, navigation} = props;
  const {params} = route;
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    searchMoviesApi(params).then(response => {
      setMovies(response.results);
    });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text style={styles.topic}>{params}</Text>
      </View>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
          {map(movies, (movie, index) => (
            <RenderMovies key={index} movie={movie} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
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
  input: {
    width: '85%',
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
