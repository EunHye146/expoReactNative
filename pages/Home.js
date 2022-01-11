import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
import Menu5 from './Menu5';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: lightgray;
`;

const Logo = styled.View`
  width : 20%;
  height : 40px;
  border: 1px solid;
`;

const Search = styled.View`
  width : 55%;
  height : 40px;
  border: 1px solid;
  flex-direction: row;
`;

const SearchInput = styled.TextInput `
  flex: 1;
  border: 1px solid;
`;

const SearchIcon = styled.Button`
  border: 1px solid;
`;

const Icon = styled.View`
  width : 20%;
  height : 40px;
  border: 1px solid;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Cont = styled.View`
  height: 1000px;
  border: 1px solid; 
`;

const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: lightgray;
`;

const Menu = styled.Button`
  
`;

export default function Home( { navigation } ) {
  const [inputCont, setInputCont] = useState('');
  const [mainCont, setMainCont] = useState('menu1');
  return (
    <Container>
      <HeaderContainer>
        <Logo><Text>logo</Text></Logo>
        <Search>
          <SearchInput
            value={inputCont}
            onChangeText={ value => setInputCont(value) }
          />
          <SearchIcon title="검색" onPress={ () => {}}/>
        </Search>
        <Icon><Text>icon</Text></Icon>
      </HeaderContainer>
      <Contents>
        { mainCont === 'menu1' && <Cont><Menu1 navigation={navigation}/></Cont>}
        { mainCont === 'menu2' && <Cont><Menu2 navigation={navigation}/></Cont>}
        { mainCont === 'menu3' && <Cont><Menu3 navigation={navigation}/></Cont>}
        { mainCont === 'menu4' && <Cont><Menu4 navigation={navigation}/></Cont>}
        { mainCont === 'menu5' && <Cont><Menu5 navigation={navigation}/></Cont>}
      </Contents>
      <MenuContainer>
        <Menu title="menu1" onPress={ () => setMainCont('menu1')}/>
        <Menu title="menu2" onPress={ () => setMainCont('menu2')}/>
        <Menu title="menu3" onPress={ () => setMainCont('menu3')}/>
        <Menu title="menu4" onPress={ () => setMainCont('menu4')}/>
        <Menu title="menu5" onPress={ () => setMainCont('menu5')}/>
      </MenuContainer>
    </Container>
  );
}
