import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
      displayWord: ""
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header backgroundColor="white" centerComponent={{ text: "Monkey-Chunky App", style: { color: 'black', marginTop: "2%"} }} />
          <TextInput
            style={styles.wordInput}
            placeholder="Enter a Word.."
            onChangeText={text => {
              this.setState({ word: text })
            }}
          />
          <TouchableOpacity style={styles.goBtn} onPress={() => {
            this.setState({ displayWord: this.state.word })
          }}>
            <Text style={{textAlign: "center"}}>
              Go
            </Text>
          </TouchableOpacity>
          <Text>
            {
              this.state.displayWord
            }
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 8,
  },
  wordInput: {
    borderColor: "black",
    backgroundColor: "wheat",
    textAlign: "center",
    marginTop: "70%",
    marginLeft: "20%",
    marginRight: "20%"
  },
  goBtn: {
    borderRadius: 20,
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: "20%",
    backgroundColor: "lightgreen"
  }
});
