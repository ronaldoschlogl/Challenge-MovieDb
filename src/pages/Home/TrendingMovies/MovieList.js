import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Top} from './styles';
import top from '../../../assets/top.png';
import MovieItem from '../../../components/MovieItem';

const MovieList = ({list}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list}
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={({item, index}) => <MovieItem navigation={navigation} item={item} index={index} list={list}/>}
    />
  )
};

export default MovieList;
