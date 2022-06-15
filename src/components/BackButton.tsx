import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-back-circle" size={50} color="#14C38E" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 47 : 27,
    marginLeft: 20,
  },
});
