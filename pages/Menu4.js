import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.TouchableOpacity`
    height : 300px;
    background: #cfaeeb;
    margin-top: 20px;
`;


function Menu4( { navigation } ) {
    return(
        <View>
            <Text>menu4</Text>
            <Content onPress={ () => navigation.navigate("Content7")}>
                <Text>content7</Text>
            </Content>
            <Content onPress={ () => navigation.navigate("Content8")}>
                <Text>content8</Text>
            </Content>
        </View>
    )
}

export default Menu4;