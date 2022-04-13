('use strict');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//const router = require('./../../BoardgameSite-API/app/routes/games_routes');

const authEvents = require('./auth/events');
const gameEvents = require('./games/events');
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp);
  $('#sign-in-form').on('submit', authEvents.onSignIn);
  $('#sign-out-button').on('click', authEvents.onSignOut);
  $('#change-password-form').on('submit', authEvents.onChangePassword);
  $('#add-game-form').on('submit', gameEvents.onAddGame);
});