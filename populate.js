const mongoose = require( 'mongoose' );
import Crypto from './models/crypto';

const cryptos = [
    {
        name: 'Bitcoin',
        slug: 'bitcoin',
        ticker: 'BTC',
        imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
        name: 'Ethereum',
        slug: 'ethereum',
        ticker: 'ETH',
        imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
        name: 'Dogecoin',
        slug: 'dogecoin',
        ticker: 'DOGE',
        imageUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    },
    {
        name: 'Shiba-Inu',
        slug: 'shiba-inu',
        ticker: 'SHIB',
        imageUrl: "https://assets.coingecko.com/coins/images/11939/small/shiba.png",
    },
    {
        name: 'Harmony',
        slug: 'harmony',
        ticker: 'ONE',
        imageUrl: "https://cryptologos.cc/logos/harmony-one-logo.png",
    },
    {
        name: 'Cardano',
        slug: 'cardano',
        ticker: 'ADA',
        imageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
    {
        name: 'Ripple',
        slug: 'xrp',
        ticker: 'XRP',
        imageUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
    {
        name: 'Crypto.com Coin',
        slug: 'crypto-com-coin',
        ticker: 'CRO',
        imageUrl: "https://cryptologos.cc/logos/crypto-com-mco-logo.png",
    },
    {
        name: 'Binance Coin',
        slug: 'binance-coin',
        ticker: 'BNB',
        imageUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    },

];

// Connect to MongoDB
mongoose.connect( 'mongodb://localhost/cryptoDB' );

// Go through each crypto
cryptos.map( data =>
{
    // Initialize a model with crypto data
    const cryptoCoin = new Crypto( data );
    // and save it into the database
    cryptoCoin.save();
} );