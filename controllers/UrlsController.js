const { generateRandomString } = require("../utils");

const createUrl = (req, res) => {
	const urlID = generateRandomString();
	const { longURL } = req.body;
	res.status(201).send({ message: "POST a /api/v1/urls", longURL });
};

const getUrls = (req, res) => {
	res.status(200).send({ message: "GET a /api/v1/urls" });
};

const findUrl = (req, res) => {
	res.status(200).send({ message: "GET a /api/v1/urls/:id" });
};

const updateUrl = (req, res) => {
	res.status(200).send({ message: "PUT a /api/v1/urls/:id" });
};

const deleteUrl = (req, res) => {
	res.status(204).send();
};

module.exports = { createUrl, getUrls, findUrl, updateUrl, deleteUrl };
