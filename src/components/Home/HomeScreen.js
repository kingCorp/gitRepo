/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { List, ListItem, Container, Header, Body, Title, Icon, Thumbnail, Left, Right } from "native-base";
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
    return axios
      .get(BASE_URL_GET_FILES)
      .then(res => {
        this.setState({ repos: res.data.results, loading: false });
        console.log(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProfile(data) {
    this.props.navigation.navigate('Profile', {info: data})
  }

  render() {
    const Loader = (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#0000ff"
        />
      </View>
    );
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ marginLeft: 10 }}>
            <Title>GitHub Repositories</Title>
          </Body>
        </Header>

        <View style={styles.container}>
          {this.state.loadiing && <Loader />}

          <FlatList
            data={this.state.repos}
            renderItem={({ item }) => {
              return (
                <View>
                  <List>
                    <ListItem avatar onPress={() => this.getProfile(item)}>
                      <Left>
                        <Thumbnail source={{ uri: "Image URL" }} />
                      </Left>
                      <Body>
                        <Text>{item.name}</Text>
                      </Body>
                    </ListItem>
                  </List>
                </View>
              );
            }}
            keyExtractor={item => item.name}
            onRefresh={() => this.getRepos}
            refreshing={this.state.loading}
          />
        </View>
      </Container>
    );
  }
}
