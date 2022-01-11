import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.TouchableOpacity`
    height : 300px;
    background: #b9d2fa;
    margin-top: 20px;
`;


function Menu2( { navigation } ) {
    return(
        <View>
            <Text>menu2</Text>
            <Content onPress={ () => navigation.navigate("Content3")}>
                <Text>content3</Text>
            </Content>
            <Content onPress={ () => navigation.navigate("Content4")}>
                <Text>content4</Text>
            </Content>
        </View>
    )
}

export default Menu2;