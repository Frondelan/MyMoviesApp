import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchComponent() {
  const [textSearch, setTextSearch] = useState<string>('');
  const [error, setError] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setError(false);
  }, [textSearch]);

  const findText = () => {
    if (textSearch === '') {
      setError(true);
    } else {
      setError(false);
      navigation.navigate('search', textSearch);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder="Search"
        onChangeText={e => setTextSearch(e)}
        onSubmitEditing={() => findText()}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        activeOpacity={0.6}
        onPress={() => findText()}>
        <Icon name="search-circle" size={52} color="#3FC5F0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  btnContainer: {
    height: 47,
    marginTop: 17,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '82%',
    height: 45,
    marginTop: 20,
    padding: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
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
