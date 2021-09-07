import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator,} from 'react-native';
import {Container, TitleStyle} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import { getTrending, getGenres } from '../../services/movieApi';
import MovieList from './TrendingMovies/MovieList';

const Home = () => {
  const title = 'Top Movies';
  const [listTrending, setListTrending] = useState([]);
  const [completMovieList, setCompleteMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const getFilmsTrending = async () => {
    const response = await getTrending(1);
    setListTrending(response.data.results);
  };

  const getFilmsGenres = async () => {
    const response = await getGenres();
    setGenreList(response.data.genres);
  }

  const searchGenreById = (genreId) => {
    const selectedGenre = genreList.find((genre) => genre.id === genreId)
    if (selectedGenre) {
      return selectedGenre.name;
    }
  }

  useEffect(() => {
    getFilmsTrending();
    getFilmsGenres();
  }, []);

  useEffect(() => {
    listTrending.map((trend) => {
      const genres = [];
      trend.genre_ids.map((genreId) => {
        genres.push(searchGenreById(genreId))
      })
      trend["genres"] = genres.join(" / ");
    });
  }, [listTrending])

  return (
    <Container>
      <View
        style={{
          marginTop: 48,
          marginBottom: 24,
          marginRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={TitleStyle.titleText}>{title}</Text>
        <Icon.Button name="search" backgroundColor="transparent"></Icon.Button>
      </View>
      {listTrending ? <MovieList list={listTrending}/> : <ActivityIndicator size="large" color="#007CFF" />}
      
    </Container>
  );
};

export default Home;
