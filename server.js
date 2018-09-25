const express = require('express');
const products = require('./api/products.json');
const app = express();

app.get('/test', function(req, res) {
	res.send('Yeah !');
});

app.get('/api/products', function(req, res) {
	console.log('Appel api/products');
	res.send(products);
});

app.get('/api/hello', (req, res) => {
	console.log('Appel api/hello');
	res.send({ express: 'Hello From Express' });
});

app.listen(8003, function() {
	console.log('Le serveur Node tourne !');
});