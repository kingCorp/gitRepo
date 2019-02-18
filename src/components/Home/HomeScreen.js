/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { View, FlatList, Text, ActivityIndicator, Image } from "react-native";
import {
  List,
  ListItem,
  Container,
  Header,
  Body,
  Title,
  Icon,
  Thumbnail,
  Left,
  Right,
  Item
} from "native-base";
import axios from "axios";
import styles from "./styles";
import { BASE_URL_GET_FILES } from "../../constant";

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      repos: []
    };
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    axios
      .get(BASE_URL_GET_FILES)
      .then(res => {
        this.setState({ repos: res.data, loading: false });
       console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProfile(data) {
    this.props.navigation.navigate("Profile", { info: data });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ marginLeft: 10 }}>
            <Title>GitHub Repositories</Title>
          </Body>
        </Header>

        <View style={styles.container}>
          <FlatList
            data={this.state.repos}
            renderItem={({ item }) => {
              return (
                <View>
                  <List>
                    <ListItem thumbnail onPress={() => this.getProfile(item)}>
                      <Left>
                        <Image
                          style={{ width: 50, height: 50 }}
                          source={{
                            uri:
                              item.owner.avatar_url
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.full_name}</Text>
                      </Body>
                    </ListItem>
                  </List>
                </View>
              );
            }}
            keyExtractor={item => item.node_id}
            onRefresh={() => this.getRepos}
            refreshing={this.state.loading}
          />
        </View>
      </Container>
    );
  }
}
