// @flow
import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { Container, Card, Button, Body, CardItem, Left, Right } from "native-base";
import styles from "./styles";

type Props = {};
export default class Profile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      console.log(this.props)
  }

  render() {
      const {info} = this.props.navigation.state.params
    return (
      <Container>
        <View style={{ padding: 10 }}>
          <Card >
            <CardItem header>
            <Left />
              <Body>
                <Text>{info.name}</Text>
                <Text>height: {info.height}</Text>
                <Text>skin color: {info.skin_color}</Text>
              </Body>
              <Right />
            </CardItem>
            <CardItem>
              <Body>
                <View style={styles.container}>
                  <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Container>
    );
  }
}
