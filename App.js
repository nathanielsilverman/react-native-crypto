import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import Store from "./src/Store";
import { Header, CryptoContainer } from "./src/components";

export default function App() {
	return (
		<Provider store={Store}>
			<View>
				<Header />
				<CryptoContainer />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
