import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View`
    flex:1;    
`;

export const Top = styled.Image.attrs({
    resizeMode: 'stretch'
})``;

export const Styles = StyleSheet.create({
    Vote:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    IconsStar:{
        flexDirection: 'row',
    },
    Rate:{
        color: '#CCE5FF', 
        fontSize: 16,
        marginLeft: 6
    }
})