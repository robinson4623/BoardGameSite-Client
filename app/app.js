('use strict');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//const router = require('./../../BoardgameSite-API/app/routes/games_routes');

const authEvents = require('./auth/events');
const gameEvents = require('./games/events');
const gameUi = require('./games/ui');
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp);
  $('#sign-in-form').on('submit', authEvents.onSignIn);
  $('#sign-out-btn').on('click', authEvents.onSignOut);
  $('#change-password-form').on('submit', authEvents.onChangePassword);
  $('#add-game-form').on('submit', gameEvents.onAddGame);
  $('#index-games-btn').on('click', gameEvents.onIndexGames);
  $('#update-game-form').on('submit', gameEvents.onUpdateGame);
  $('#delete-game-form').on('submit', gameEvents.onDeleteGame);
  $('#find-game-form').on('submit', gameEvents.onShowGame);
  $('#show-add-game').on('click', function () {
    $('#add-game-form').toggle();
  });
  $('#show-change-password').on('click', function () {
    $('#change-password-form').toggle();
  });
  $('#show-update-game').on('click', function () {
    $('#update-game-form').toggle();
  });

  $('#show-find-game').on('click', function () {
    $('#find-game-form').toggle();
  });
  $('#show-delete-game').on('click', function () {
    $('#delete-game-form').toggle();
  });
});
