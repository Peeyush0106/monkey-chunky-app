import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Constants from 'expo-constants';
import DB from './localDB';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			word: "",
			displayWord: "",
			chunks: []
		};
	}

	render() {
		return (
			<SafeAreaProvider>
				<View style={styles.container}>
					<Header backgroundColor="white" centerComponent={{ text: "Monkey-Chunky App", style: { color: 'black', marginTop: "2%", fontSize: 24 } }} />
					<Image source={require("./assets/monkey_face.jpg")} style={{ width: 150, height: 150, margin: "auto", alignSelf: "center" }} />
					<TextInput
						style={styles.wordInput}
						placeholder="Enter a Word.."
						onChangeText={text => {
							this.setState({ word: text })
						}}
						value={this.state.word}
					/>
					<TouchableOpacity style={styles.goBtn} onPress={() => {
						this.setState({ chunks: DB[this.state.word].chunks });
						console.log(this.state.chunks);
					}}>
						<Text style={{ textAlign: "center" }}>
							Go
						</Text>
					</TouchableOpacity>
					<View>
						{
						this.state.chunks.map(({item}) => {
							return (
								<TouchableOpacity style={styles.goBtn} onPress={}>
									<Text>
										{item}
									</Text>
								</TouchableOpacity>
							)
						})
						}
					</View>
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
