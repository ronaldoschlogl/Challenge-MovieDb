import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator, TextInput} from 'react-native';
import {Container, Styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import { getTrending, getGenres, getSearch } from '../../services/movieApi';
import MovieList from './TrendingMovies/MovieList';

const Home = () => {
  const title = 'Top Movies';
  const [listTrending, setListTrending] = useState([]);
  const [listBySearchTrending, setListBySearchTrending] = useState([]);
  const [completMovieList, setCompleteMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [search, setSearch] = useState(false);
  const [text, onChangeText] = useState();
  const trend = true;
  const triggerSearch = () => {
    if(search == false)
      setSearch(true);
    else if(search == true){
      getFilmsTrending();
      setSearch(false);
    }
      
  }

  const getMovieSearch = async () => {
    const searchText = text;
    if(searchText){
      const response = await getSearch(searchText);
      setListTrending([]);
      setListTrending(response.data.results);
    }
    
  }

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


  const renderHeader = () => {  
      return (
       <View
        style={Styles.HeaderView}>
        <Text style={Styles.titleText}>{title}</Text>
        <Icon.Button name="search" backgroundColor="transparent" onPress={() => triggerSearch()}></Icon.Button>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <>
      <View style={Styles.HeaderView}>
      <Text style={Styles.titleText}>Search</Text>
      <Icon.Button name="check" backgroundColor="transparent" onPress={() => getMovieSearch()}></Icon.Button>
      <Icon.Button name="times" backgroundColor="transparent" onPress={() => triggerSearch()}></Icon.Button>
      </View>
      <TextInput
        style={Styles.Input}
        onChangeText={onChangeText}
        value={text}
        inlineImageLeft='search_icon'
      />
      </>
    )
  }

  const renderList = (list) => {
    return (<MovieList list={list} trending={trend}/>)
  }
  const renderSearchList = () => {
    return ( <FlatList
      data={listBySearchTrending}
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={({item, index}) => <Text style={Styles.titleText}>{item.name}</Text>}
    />)
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

  const renderPage = () => {
    return (
      <Container>
        {search == false ? renderHeader() : renderSearch()}
        {listTrending ? renderList(listTrending) : <ActivityIndicator size="large" color="#007CFF" />}
        {!listTrending ? renderSearchList() : null}
      </Container>
    )
  }
  useEffect(() => {
      renderPage();
  })
  return (
    renderPage()
  );
};

export default Home;
