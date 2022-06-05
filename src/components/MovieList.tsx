import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {BASE_PATH_IMG} from '../utils/constants';

export default function MovieList(props) {
  const {title, overview, release_date, vote_average, poster_path} = props;

  return (
    <>
      <Image
        style={styles.image}
        source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
      />
      <View style={styles.textMov}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textOverview}>
          {overview.slice(0, 200)} {'...'}
        </Text>
        <Text style={[styles.textDate, {color: '#14C38E'}]}>
          Release date: {'\n'}
          <Text style={styles.textDate}>{release_date}</Text>
        </Text>
        <Text style={[styles.textDate, {color: '#14C38E'}]}>
          Vote average: {'\n'}
          <Text style={styles.textDate}>{vote_average}</Text>
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
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
});
