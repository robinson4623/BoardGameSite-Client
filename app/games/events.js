('use strict');

const gamesApi = require('./api');
const gamesUi = require('./ui');
const getFormFields = require('./../../lib/get-form-fields');

const onAddGame = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  gamesApi
    .addGame(data)
    .then(response => gamesUi.onAddGameSuccess(response))
    .catch(() => gamesUi.onAddGameFailure());
};

const onIndexGames = function (event) {
  gamesApi
    .indexGames()
    .then(response => gamesUi.onIndexGamesSuccess(response))
    .catch(() => gamesUi.onIndexGamesFailure());
};

const onUpdateGame = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log(data);

  gamesApi
    .updateGame(data)
    .then(response => gamesUi.onUpdateGameSuccess(response))
    .catch(() => gamesUi.onUpdateGameFailure());
};

const onDeleteGame = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log(data);

  gamesApi
    .deleteGame(data)
    .then(response => gamesUi.onDeleteGameSuccess(response))
    .catch(() => gamesUi.onDeleteGameFailure());
};

const onShowGame = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log(data);

  gamesApi
    .showGame(data)
    .then(response => gamesUi.onShowGameSuccess(response))
    .catch(() => gamesUi.onShowGameFailure());
};

module.exports = {
  onAddGame,
  onIndexGames,
  onUpdateGame,
  onDeleteGame,
  onShowGame,
};
