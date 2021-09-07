import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import { Top, Styles } from './styles';
import top from '../assets/top.png';
import { Star } from "./Star.js";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieItem = (props) => {
    const {navigation, item, index, list} = props;
    const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;
    let star = Math.floor(item.vote_average / 2);
    let id = item.id;
    let iconStar = [];
    const handleMovie = () => {
        navigation.replace("Movie", {id, index, list});
    };

    for(let i=0;i<5;i++){
      if(star > i)
        iconStar.push(
          <Icon name="star" style={{color: '#FFB825'}}></Icon>
        )
      else{
        iconStar.push(
          <Icon name="star" style={{color: '#fff'}}></Icon>
        )
      }
    }
    
    return (
        <TouchableOpacity onPress={() => handleMovie()}>
            <View
              style={{
                marginTop: 16,
                marginLeft: 24,
                marginRight: 24,
                flexDirection: 'row',
                backgroundColor: index == 0 ? '#007CFF' : '#1B1C2A',
                borderRadius: 15,
              }}>
              <Image source={{uri: uri}} style={{width: 118, height: 168}} />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 16,
                  marginTop: 16,
                  width: '50%',
                }}>
                {index == 0 ? (
                  <View style={{flexDirection: 'row'}}>
                    <Top source={top} />
                    <Text
                      style={{
                        color: 'white',
                        marginBottom: 4,
                        fontSize: 14,
                        flexShrink: 1,
                        marginLeft: 8,
                      }}>
                      Top movie this week
                    </Text>
                  </View>
                ) : null}
                <Text
                  style={{
                    color: 'white',
                    marginBottom: 4,
                    fontSize: 16,
                    flexShrink: 1,
                  }}>
                  {item.title}
                </Text>

                
                <Text style={{color: '#CCE5FF', fontSize: 12}}>
                  {item.genres}
                </Text>

                <Text style={{color: '#CCE5FF', fontSize: 12}}>
                  {item.release_date.split('-')[0]}
                </Text>

                
                <View  style={Styles.Vote}>
                <View style={Styles.IconsStar}>{iconStar}</View>
                <Text style={Styles.Rate}>{star}/5</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
    );
}

export default MovieItem;