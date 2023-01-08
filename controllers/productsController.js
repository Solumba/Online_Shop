const fs = require("fs");
//turns json data to standard object
const productsData = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/products-data.json`)
);

exports.getAllProducts = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			tours,
		},
	});
};

exports.getSingleProduct = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			tours,
		},
	});
};

exports.addProduct = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			tours,
		},
	});
};

exports.updateProduct = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			tours,
		},
	});
};

exports.removeProduct = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			tours,
		},
	});
};
