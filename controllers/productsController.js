const fs = require('fs');
//turns json data to standard object
const productsData = JSON.parse(
	fs.readFileSync(`${__dirname}/../dev-data/data/products-data.json`),
);

exports.getAllProducts = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			productsData,
		},
	});
};

exports.getSingleProduct = (req, res) => {
	const id = req.params.id * 1;
	const product = productsData.find((prod) => {
		return prod.id === id;
	});

	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			product,
		},
	});
};

exports.addProduct = (req, res) => {
	console.log(req.body);
	const newId = productsData[productsData.length - 1].id + 1;

	const newProduct = Object.assign({ id: newId }, req.body);
	console.log(newProduct);

	productsData.push(newProduct);

	//writing to the dummy DB - tours-simple.json
	fs.writeFile(
		`${__dirname}/../dev-data/data/products-data.json`,
		JSON.stringify(productsData),
		(err) => {
			if (err) throw new Error(err.message);
			res.status(201).json({
				status: 'success',
				data: {
					product: newProduct,
				},
			});
		},
	);
};

exports.updateProduct = (req, res) => {
	res.status(200).json({
		status: 'successful',
		result: productsData.length,
		data: {
			productsData,
		},
	});
};

exports.removeProduct = (req, res) => {
	const id = req.params.id * 1;
	const productsNew = productsData.filter((product) => {
		return product.id !== id;
	});

	fs.writeFile(
		`${__dirname}/../dev-data/data/products-data.json`,
		JSON.stringify(productsNew),
		(err) => {
			res.status(204).json({
				status: 'successful',
				result: productsData.length,
				data: {
					product: productsNew,
				},
			});
		},
	);
};
