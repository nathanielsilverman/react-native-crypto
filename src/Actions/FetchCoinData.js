import axios from "axios";
import { apiBaseURL, apiKey } from "../Utils/Constants";
import {
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL,
} from "./../Utils/ActionTypes";

const cryptoSymbols = ["BTC", "ETH", "DOGE", "SHIB", "ADA", "ONE", "CRO"];
const cryptoIDs = [
	"bitcoin",
	"ethereum",
	"dogecoin",
	"shiba-inu",
	"cardano",
	"harmony",
	"crypto-com-coin",
];

export default function FetchCoinData() {
	return (dispatch) => {
		dispatch({ type: FETCHING_COIN_DATA });

		// const coins = [];
		// coinIds.forEach((element) => { ${element}
		// var today = new Date();
		// var dd = today.getDate();
		// var mm = today.getMonth() + 1;
		// var yyyy = today.getFullYear();
		// if (dd < 10) {
		// 	dd = "0" + dd;
		// }
		// if (mm < 10) {
		// 	mm = "0" + mm;
		// }
		// var date = `${dd}-${mm}-${yyyy}`;
		// // `https://api.coingecko.com/api/v3/coins/${bitcoin}/history?date=${date}&localization=false`

		return axios
			.get(`https://api.coincap.io/v2/assets?ids=${cryptoIDs.join(",")}`)
			.then((res) => {
				// `api.coincap.io/v2/assets?ids=${cryptoIDs.join(",")}`
				// console.log(JSON.stringify(res.data));
				// `${apiBaseURL}?${apiKey}&${cryptoSymbols.join(',')}`
				const coinData = [];
				res.data.data.forEach((element) => {
					const coin = {
						id: element.id,
						symbol: element.symbol,
						name: element.name,
						price: element.priceUsd,
						percentage_change_24h: element.changePercent24Hr,
					};
					coinData.push(coin);
				});
				console.log(JSON.stringify(coinData));
				dispatch({
					type: FETCHING_COIN_DATA_SUCCESS,
					payload: coinData,
				});
			})
			.catch((err) => {
				console.log("the printers jammed");
				dispatch({
					type: FETCHING_COIN_DATA_FAIL,
					payload: err,
				});
			});
	};
}
