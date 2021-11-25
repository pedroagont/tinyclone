const { celebrate, Joi, Segments } = require('celebrate');

const UrlsValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    longURL: Joi.string()
      .regex(
        /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
      )
      .required()
  })
});

module.exports = UrlsValidator;
