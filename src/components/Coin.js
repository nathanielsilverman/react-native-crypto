import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../Utils/CoinIcons";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		marginBottom: 20,
		borderBottomColor: "#e5e5e5",
		borderBottomWidth: 3,
		padding: 20,
	},
	upperRow: {
		display: "flex",
		flexDirection: "row",
		marginBottom: 15,
	},
	coinSymbol: {
		marginTop: 10,
		marginLeft: 20,
		marginRight: 5,
		fontWeight: "bold",
	},
	coinName: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 20,
	},
	separator: {
		marginTop: 10,
		fontWeight: "bold",
	},
	coinPrice: {
		marginTop: 10,
		marginLeft: "auto",
		marginRight: 10,
		fontWeight: "bold",
	},
	image: {
		width: 35,
		height: 35,
	},
	dollarSign: {
		fontWeight: "bold",
	},
	statisticContainer: {
		display: "flex",
		borderTopColor: "#FAFAFA",
		borderTopWidth: 2,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	inTheGreen: {
		color: "green",
		fontWeight: "bold",
		marginLeft: 5,
	},
	inTheRed: {
		color: "red",
		fontWeight: "bold",
		marginLeft: 5,
	},
});

const Coin = ({
	symbol,
	name,
	current_price,
	price_change_percentage_24h,
	price_change_percentage_7d,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.upperRow}>
				<Image
					style={styles.image}
					source={{
						uri: images[symbol],
					}}
				/>
				<Text style={styles.coinSymbol}>{symbol}</Text>
				<Text style={styles.separator}>|</Text>
				<Text style={styles.coinName}>{name}</Text>
				<Text style={styles.coinPrice}>
					{current_price}
					<Text style={styles.dollarSign}>$</Text>
				</Text>
			</View>
			<View style={styles.statisticContainer}>
				<Text>
					24 hour:{" "}
					<Text
						style={
							price_change_percentage_24h < 0
								? styles.inTheRed
								: styles.inTheGreen
						}
					>
						{price_change_percentage_24h} %{" "}
					</Text>
				</Text>
				<Text>
					7 day:{" "}
					<Text
						style={
							price_change_percentage_7d < 0
								? styles.inTheRed
								: styles.inTheGreen
						}
					>
						{price_change_percentage_7d} %{" "}
					</Text>
				</Text>
			</View>
		</View>
	);
};

export default Coin;
