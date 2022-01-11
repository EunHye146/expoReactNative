import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.TouchableOpacity`
    height : 300px;
    background: #c3decd;
    margin-top: 20px;
`;


function Menu1( { navigation } ) {
    return(
        <View>
            <Text>menu1</Text>
            <Content onPress={ () => navigation.navigate("Content1")}>
                <Text>content1</Text>
            </Content>
            <Content onPress={ () => navigation.navigate("Content2")}>
                <Text>content2</Text>
            </Content>
        </View>
    )
}

export default Menu1;