import axios from "axios";
import { apiBaseURL, apiKey } from "../Utils/Constants";
import
{
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL,
} from "./../Utils/ActionTypes";

const cryptoSlugs = [
	"bitcoin",
	"ethereum",
	"dogecoin",
	"shiba-inu",
	"cardano",
	"harmony",
	'ripple',
	"crypto-com-coin",
];



export default function FetchCoinData ()
{
	return ( dispatch ) =>
	{
		dispatch( { type: FETCHING_COIN_DATA } );
		return axios
			.get(
				`https://api.coincap.io/v2/assets?ids=${ cryptoSlugs.join( "," ) }`
			)
			.then( ( res ) =>
			{
				const coinData = [];
				res.data.data.forEach( ( element ) =>
				{
					const coin = {
						id: element.id,
						symbol: element.symbol,
						name: element.name,
						price: element.priceUsd,
						percentage_change_24h: element.changePercent24Hr,
					};
					coinData.push( coin );
				} );
				// console.log(JSON.stringify(coinData));
				dispatch( {
					type: FETCHING_COIN_DATA_SUCCESS,
					payload: coinData,
				} );
			} )
			.catch( ( err ) =>
			{
				dispatch( {
					type: FETCHING_COIN_DATA_FAIL,
					payload: err,
				} );
			} );
	};
}
