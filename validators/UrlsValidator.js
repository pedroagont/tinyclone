const { celebrate, Joi, Segments } = require("celebrate");

const longurlValidator = celebrate({
	[Segments.BODY]: Joi.object().keys({
		longURL: Joi.string()
			.regex(
				/^((http?):\/\/)?[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
			)
			.required(),
	}),
});

module.exports = { longurlValidator };
