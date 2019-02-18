// @flow
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import {
  Container,
  Card,
  Header,
  Body,
  CardItem,
  Left,
  Right,
  Title
} from "native-base";
import styles from "./styles";

type Props = {};
export default class Profile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { info } = this.props.navigation.state.params;
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ marginLeft: 10 }}>
            <Title>{info.name}</Title>
          </Body>
        </Header>
        <View style={{ padding: 10 }}>
          <Card>
            <CardItem header>
            <Left />
              <Body>
              <Image
                          style={{ width: 100, height: 100 }}
                          source={{
                            uri:
                              info.owner.avatar_url
                          }}
                        />
              </Body>
              <Right />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Name: </Text>
              </Left>
              <Right>
                <Text>{info.full_name}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Github profile: </Text>
              </Left>
              <Right>
                <Text>{info.owner.html_url}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>my repositories: </Text>
              </Left>
              <Right>
                <Text>{info.owner.repos_url}</Text>
              </Right>
            </CardItem>
          </Card>
        </View>
      </Container>
    );
  }
}
