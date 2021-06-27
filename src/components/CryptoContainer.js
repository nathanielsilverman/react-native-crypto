import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Spinner } from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../Actions/FetchCoinData";
import Coin from "./Coin";

class CryptoContainer extends Component {
	componentDidMount() {
		this.props.FetchCoinData();
		console.log("loaded coins");
	}

	renderCoins() {
		const { crypto } = this.props;
		if (crypto.data != null) {
			return crypto.data.map((coin) => (
				<Coin
					key={coin.name}
					coin_name={coin.coin_name}
					symbol={coin.symbol}
					price_usd={coin.current_price}
					percent_change_24h={coin.percent_change_24h}
					percent_change_7d={coin.percent_change_7d}
				/>
			));
		}
		return <Coin />;
	}

	render() {
		const { crypto } = this.props;
		const { contentContainer } = styles;
		if (crypto.isFetching) {
			return (
				<View>
					<Spinner
						visible={crypto.isFetching}
						textContent={"Loading..."}
						textStyle={{ color: "#253145" }}
						animation="fade"
					/>
				</View>
			);
		}

		return (
			<ScrollView contentContainerStyle={contentContainer}>
				{this.renderCoins()}
			</ScrollView>
		);
	}
}

const styles = {
	contentContainer: {
		paddingBottom: 100,
		paddingTop: 55,
	},
};

function mapStateToProps(state) {
	return {
		crypto: state.crypto,
	};
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
