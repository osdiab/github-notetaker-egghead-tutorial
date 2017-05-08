/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class GithubNotetaker extends React.Component<{}, {}> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native... Typescript edition!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit __build/index.ios.tsx
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("GithubNotetaker", () => GithubNotetaker);
