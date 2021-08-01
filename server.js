const express = require( 'express' );
const mongoose = require( "mongoose" );
const bodyParser = require( "body-parser" );

// Initialize https server
const app = express();

// Handle / route
app.get( '/', ( req, res ) =>
{
	res.send( 'Hello World!' );
} );

const server = app.listen( 3030, () =>
{
	const { address, port } = server.address();
	console.log( `Listening at http://${ address }:${ port }` );
} );