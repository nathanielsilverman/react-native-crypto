import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../Actions/FetchCoinData";
import Coin from "./Coin";

class CryptoContainer extends Component
{
	componentDidMount ()
	{
		this.props.FetchCoinData();
	}
	renderCoins ()
	{
		const { crypto } = this.props;
		if ( crypto.data != null )
		{
			return crypto.data.map( ( coin ) => (
				<Coin
					key={ coin.name }
					name={ coin.name }
					symbol={ coin.symbol }
					price={ coin.price }
					percentage_change_24h={ coin.percentage_change_24h }
				/>
			) );
		}
		return (
			<ScrollView contentContainerStyle={ styles.contentContainer }>
				<Spinner
					size={ "large" }
					visible={ true }
					textContent={ "Loading..." }
					textStyle={ { color: "#253145" } }
					animation="fade"
				/>
			</ScrollView>
		);
	}

	render ()
	{
		const { crypto } = this.props;
		const { contentContainer } = styles;
		if ( crypto.isFetching )
		{
			return (
				<View>
					<Spinner
						cancelable
						text={ "Loading..." }
						textStyle={ { color: "#253145" } }
					/>
				</View>
			);
		}

		return (
			<ScrollView contentContainerStyle={ contentContainer }>
				{ this.renderCoins() }
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

function mapStateToProps ( state )
{
	return {
		crypto: state.crypto,
	};
}

export default connect( mapStateToProps, { FetchCoinData } )( CryptoContainer );
