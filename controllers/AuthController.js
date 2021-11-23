const { generateRandomString } = require("../utils");

const register = (req, res) => {
	const { email, password } = req.body;
	const userID = generateRandomString();
	const user = { email, password, userID };
	res.status(201).send({ message: "Usuario creado!", user });
};

const login = (req, res) => {
	const { email, password } = req.body;
	const user = { email, password };
	res.status(200).send({ message: "Bienvenido!", user });
};

module.exports = { register, login };
