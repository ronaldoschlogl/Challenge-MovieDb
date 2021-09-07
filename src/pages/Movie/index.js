import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Linking,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Gradient,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

import {Styles, Container, Top} from './styles';
import {Loading} from '../../components/Loading';
import api from '../../services/api';
import top from '../../assets/top.png';
import {getMovie} from '../../services/movieApi';
import MovieList from '../Home/TrendingMovies/MovieList';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBack from '../../components/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Movie = ({route: {params}}) => {
  const {navigate} = useNavigation();

  const id = params.id;
  const index = params.index;
  let list = params.list;

  const deleteItemById = () =>{
    const filteredList = list.filter(item => item.id !== id);
    list = filteredList;
    return list;
  }

  const [movieData, setMovieData] = useState(undefined);

  const loading = false;

  const getMovieData = async () => {
    return await getMovie(id);
  };

  useEffect(() => {
    getMovieData().then(response => {
      setMovieData(response.data);
    });
    deleteItemById();
  }, []);

  const renderAverage = () => {
    if (movieData) {
      let star = Math.floor(movieData.vote_average / 2);
      return star;
    }
  };

  const renderHeader = () => {
    return (
      <View>
        <Text style={Styles.TextTop}>Top Movie of the week</Text>
        <View style={Styles.view}>
          <Top source={top} style={Styles.icon} />
          <Text style={Styles.titleTextIcon}>{renderTitle()}</Text>
        </View>
      </View>
    );
  };

  const renderStars = () => {
    if (movieData) {
      let star = Math.floor(movieData.vote_average / 2);
      let iconStar = [];
      for (let i = 0; i < 5; i++) {
        if (star > i)
          iconStar.push(
            <Icon name="star" style={{color: '#FFB825', marginLeft: 4}}></Icon>,
          );
        else {
          iconStar.push(
            <Icon name="star" style={{color: '#fff', marginLeft: 4}}></Icon>,
          );
        }
      }
      return iconStar;
    }
  };

  const renderReleaseDate = () => {
    if (movieData) {
      const release_year = movieData.release_date.split('-')[0];
      return release_year;
    }
  };
  const renderOverview = () => {
    if (movieData) {
      return movieData.overview;
    }
  };

  const renderPoster = () => {
    if (movieData) {
      const uri = `https://image.tmdb.org/t/p/w342/${movieData.poster_path}`;
      return uri;
    }
  };

  const renderRuntime = () => {
    if (movieData) {
      const duration = `${Math.floor(movieData.runtime / 60)}h ${
        movieData.runtime % 60
      }min`;
      return duration;
    }
  };

  const renderTitle = () => {
    if (movieData) {
      return movieData.title;
    }
  };

  const renderMovieDetails = () => {
    return (
      <>
        {index == 0 ? (
         renderHeader()
        ) : (
          <View style={Styles.TextTop}>
            <Text style={Styles.titleTextNoIcon}>{renderTitle()}</Text>
          </View>
        )}
        {movieData ? (
          <>
            <Text style={Styles.TextOverView}>
              {renderReleaseDate()} • {renderGender()} • {renderRuntime()}
            </Text>
            <Text style={Styles.TextOverView}>{renderOverview()}</Text>

            <View style={Styles.Vote}>
              <View style={Styles.IconsStar}>{renderStars()}</View>
              <Text style={Styles.Rate}>{renderAverage()}/5</Text>
            </View>
            <Text style={Styles.titleTextNoIcon}>Also trending</Text>
          </>
        ) : (
          <ActivityIndicator size="large" color="#007CFF" />
        )}
      </>
    );
  };

  const renderGender = () => {
    if (movieData) {
      const genreList = [];
      genreList.push(movieData.genres[0].name);
      genreList.push(' / ');
      genreList.push(movieData.genres[1].name);

      // movieData.genres.map(genre => {
      //   genreList.push(genre.name);
      //   genreList.push(' / ');
      // });
      // genreList.pop();
      return genreList;
    }
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={{uri: renderPoster()}}
        style={Styles.backgroundContainer}>
        <LinearGradient
          style={Styles.linearGradient}
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)', '#000']}>
          <HeaderBack />
          <FlatList
            data={list}
            ListHeaderComponent={() => renderMovieDetails()}
            ListFooterComponent={<MovieList list={deleteItemById()} trending={false}/>}
          />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Movie;
