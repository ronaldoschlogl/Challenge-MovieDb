import styled from 'styled-components/native';
import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    background-color: rgba(0,0,0,0.7);
    flex:1;    
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 70%;
`;
export const Top = styled.Image.attrs({
    resizeMode: 'stretch'
})``;

export const Styles = StyleSheet.create({
     loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
    backgroundContainer: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },
    linearGradient: {
        flex: 1,
    },
    view: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 24,
        alignItems: 'center'
    },
    TextTop: {
        fontSize: 16,
        color: 'white',
        marginLeft: 24,
        marginTop: 125
    },
     titleTextIcon: {
        fontSize: 32,
        fontWeight: '600',
        color: 'white',
        marginLeft: 16,
    },
    titleTextNoIcon: {
        fontSize: 32,
        fontWeight: '600',
        color: 'white',
        marginLeft: 48,
    },
    icon:{
        width: 32,
        height: 38,
    },
    TextOverView:{
        marginLeft: 72,
        marginRight: 24,
        marginBottom: 16,
        color: '#CCE5FF', 
        fontSize: 16,
    },
     Vote:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 72,
        marginTop: 16,
        marginBottom: 40
    },
    IconsStar:{
        flexDirection: 'row',
    },
    Rate:{
        color: '#CCE5FF', 
        fontSize: 16,
        marginLeft: 6
    },
    Trending:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        marginLeft: 24,
    }
})