import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #070818;
    flex:1;    
`;

export const TitleStyle = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: '600',
        color: 'white',
        marginLeft: 24
    }
});
