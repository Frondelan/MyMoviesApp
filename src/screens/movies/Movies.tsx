import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import AnimationComponent from '../../components/AnimationComponent';
import RenderMovies from '../../components/RenderMovies';
import SearchComponent from '../../components/SearchComponent';
import usePopular from '../../hooks/usePopular';

export default function Movies() {
  const {isLoading, popular} = usePopular();

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <AnimationComponent imgName="loading" width={300} height={300} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerT}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTopic}>My Movie App</Text>
      </View>
      <SearchComponent />
      <View style={styles.containerMovies}>
        <RenderMovies movie={popular} />
      </View>
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
  containerT: {
    flex: 1,
    backgroundColor: '#141E61',
  },
  header: {
    marginTop: 10,
    height: Platform.OS === 'ios' ? 30 : 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTopic: {
    color: '#14C38E',
    fontSize: 23,
    fontWeight: 'bold',
  },
  containerMovies: {
    flex: 1,
    marginTop: 20,
  },
});
