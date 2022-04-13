('use strict');

const gamesApi = require('./api');
const gamesUi = require('./ui');
const getFormFields = require('./../../lib/get-form-fields');

const onAddGame = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log(data);

  gamesApi
    .addGame(data)
    .then(response => gamesUi.onAddGameSuccess(response))
    .catch(() => gamesUi.onAddGameFailure());
};

module.exports = {
  onAddGame,
};
