import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  background-color: #070818;
  flex: 1;
`;

export const Styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    marginLeft: 24,
  },
  HeaderView: {
    marginTop: 48,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
