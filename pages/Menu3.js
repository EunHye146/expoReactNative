import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.TouchableOpacity`
    height : 300px;
    background: #ccafbc;
    margin-top: 20px;
`;


function Menu3( { navigation } ) {
    return(
        <View>
            <Text>menu3</Text>
            <Content onPress={ () => navigation.navigate("Content5")}>
                <Text>content5</Text>
            </Content>
            <Content onPress={ () => navigation.navigate("Content6")}>
                <Text>content6</Text>
            </Content>
        </View>
    )
}

export default Menu3;