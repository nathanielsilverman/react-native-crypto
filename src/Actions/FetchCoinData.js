import axios from "axios";
import { apiBaseURL } from "../Utils/Constants";
import {
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL,
} from "./../Utils/ActionTypes";

const coinIds = [
	"bitcoin",
	"ethereum",
	"dogecoin",
	"shiba-inu",
	"cardano",
	"harmony",
	"crypto-com-chain",
];

export default function FetchCoinData() {
	return (dispatch) => {
		dispatch({ type: FETCHING_COIN_DATA });
		// const coins = [];
		// coinIds.forEach((element) => { ${element}
		return axios
			.get(
				`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
			)
			.then((res) => {
				const coinData = {
					symbol: res.data.symbol,
					name: res.data.name,
					current_price: res.data.current_price.usd,
					price_change_percentage_24h:
						res.data.price_change_percentage_24h,
					price_change_percentage_7d:
						res.data.price_change_percentage_7d,
				};
				dispatch({
					type: FETCHING_COIN_DATA_SUCCESS,
					payload: coinData,
				});
			})
			.catch((err) => {
				dispatch({
					type: FETCHING_COIN_DATA_FAIL,
					payload: err,
				});
			});
	};
	// });
}
