import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'

const HeaderWrap = styled(View)`
  position: relative;
  z-index: 999;
`;

const Header = styled(View)`
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2.5% 0 2.5%;
  background : lightgray;
`;

const Logo = styled(View)`
  width : 20%;
  height : 40px;
  border: 1px solid;
`;

const Search = styled(View)`
  width : 55%;
  height : 40px;
  border: 1px solid;
`;

const Icon = styled(View)`
  width : 20%;
  height : 40px;
  border: 1px solid;
`;

const Cont = styled(View)`
  padding: 0 2.5% 0 2.5%;
  height : 500px;
`;

const ContIn = styled(View)`
  height : 100%;
  border : 1px solid;
  align-items: center;
  justify-content: center;
`;

const BottomWrap = styled(View)`
  position: relative;
  z-index: 999;
`;

const BottomMenu = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2.5% 0 2.5%;
  background : lightgray;
`;

const Menu = styled(View)`
  width: 60px;

  height : 60px;
  border: 1px solid;
`;

export default function App() {
  return (
    <SafeAreaView>
      <HeaderWrap>
      <Header>
        <Logo>
          <Text>Logo</Text>
        </Logo>
        <Search>
          <Text>search</Text>
        </Search>
        <Icon>
          <Text>icon</Text>
        </Icon>
      </Header>
      </HeaderWrap>
      <ScrollView>
      <Cont>
        <ContIn>
          <Text>컨텐츠1</Text>
        </ContIn>
      </Cont>
      <Cont>
        <ContIn>
          <Text>컨텐츠2</Text>
        </ContIn>
      </Cont>
      <Cont>
        <ContIn>
          <Text>컨텐츠3</Text>
        </ContIn>
      </Cont>
      <Cont>
        <ContIn>
          <Text>컨텐츠4</Text>
        </ContIn>
      </Cont>
      </ScrollView>
      <BottomWrap>
      <BottomMenu>
        <Menu><Text>메뉴</Text></Menu>
        <Menu><Text>메뉴</Text></Menu>
        <Menu><Text>메뉴</Text></Menu>
        <Menu><Text>메뉴</Text></Menu>
        <Menu><Text>메뉴</Text></Menu>
      </BottomMenu>
      </BottomWrap>
    </SafeAreaView>
  );
}
