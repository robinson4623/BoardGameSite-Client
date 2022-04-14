('use strict');

const store = require('../store');

const onSignUpSuccess = function () {
  $('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>All signed up</p>');
  $('#sign-up-form').hide();
};

const onSignUpFailure = function () {
  console.log('It no worky to sign up');
  //$('#auth-result').html('<p>No bueno</p>');
};

const onSignInSuccess = function (response) {
  $('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>All signed in</p>');
  $('#sign-in-form').hide();
  $('#sign-up-form').hide();

  store.user = response.user;
};

const onSignInFailure = function () {
  //console.log(user);
  console.log('It no worky to sign in');
  //$('#auth-result').html('<p>No bueno</p>');
};

const onSignOutSuccess = function () {
  $('#status-message').html('<p>Signed out successfully.</p>');
  $('#sign-up-form').css('display', 'inherit');
  $('#sign-in-form').css('display', 'inherit');
  $('#sign-out-button').css('display', 'none');
  // gameEvents.currentPlayer = gameEvents.player1;
  // gameEvents.currentPlayerImage = gameEvents.player1Image;
  // gameEvents.currentPlayerWinImage = gameEvents.player1WinImage;
  //console.log(store)
  store.user = null;
  store.response = null;

  console.log(store);
};

const onSignOutFailure = function () {
  $('#status-message').html('<p>Error signing out</p>');
};

const onChangePasswordSuccess = function () {
  $('#status-message').html('<p>Password successfully.</p>');
  $('form').trigger('reset');
  // $('#sign-up-form').css('display', 'inherit');
  // $('#sign-in-form').css('display', 'inherit');
  // $('#sign-out-button').css('display', 'none');
  // gameEvents.currentPlayer = gameEvents.player1;
  // gameEvents.currentPlayerImage = gameEvents.player1Image;
  // gameEvents.currentPlayerWinImage = gameEvents.player1WinImage;
  //console.log(store)
  //store.user = null;
  //store.response = null;

  //console.log(store);
};

const onChangePasswordFailure = function () {
  $('#status-message').html('<p>Error changing password</p>');
};
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
};
