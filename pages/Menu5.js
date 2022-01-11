import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.TouchableOpacity`
    height : 300px;
    background: #bdc4a7;
    margin-top: 20px;
`;


function Menu5( { navigation } ) {
    return(
        <View>
            <Text>menu5</Text>
            <Content onPress={ () => navigation.navigate("Content9")}>
                <Text>content9</Text>
            </Content>
            <Content onPress={ () => navigation.navigate("Content10")}>
                <Text>content10</Text>
            </Content>
        </View>
    )
}

export default Menu5;