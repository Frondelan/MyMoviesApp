import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {map} from 'lodash';
import {getPopularMoviesApi} from '../../api/api';
import RenderMovies from '../../components/RenderMovies';

export default function Movies(props) {
  const {navigation} = props;
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  const [vatError, setVatError] = useState({});

  useEffect(() => {
    getPopularMoviesApi().then(response => {
      setMovies(response.results);
    });
  }, []);

  useEffect(() => {
    setVatError('');
  }, [search]);

  const goSearch = () => {
    if (!search) {
      setVatError({mensaje: 'No empty space'});
    } else {
      setVatError('');
      if (search.length >= 1) {
        navigation.push('search', search);
      }
    }
  };

  return (
    <SafeAreaView style={styles.containerS}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search movies"
          style={[styles.input, vatError.mensaje && styles.error]}
          placeholderTextColor="#000"
          underlineColorAndroid="#000"
          onChangeText={e => setSearch(e)}
          onSubmitEditing={() => goSearch()}
        />
        <TouchableOpacity style={styles.btnContainer} onPress={goSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textError}>{vatError.mensaje}</Text>

      <ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  btnContainer: {
    backgroundColor: '#3FC5F0',
    height: 45,
    padding: 15,
    marginTop: 20,
    width: '22%',
  },
  containerS: {
    backgroundColor: '#141E61',
  },
  input: {
    width: '72%',
    height: 45,
    marginTop: 20,
    padding: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  error: {
    borderColor: '#D61C4E',
    borderWidth: 3,
  },
  textError: {
    marginLeft: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
