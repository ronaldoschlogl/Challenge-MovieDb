import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const HeaderBack = () => {
  const {replace} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => replace("Home")}>
        <Icon large name="arrow-left" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'rgba(0,0,0,0.5);}',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 10,
  },
});

export default HeaderBack;
