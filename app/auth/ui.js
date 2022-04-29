('use strict')

const store = require('../store')

const onSignUpSuccess = function () {
  $('form').trigger('reset')
  // $('#auth-result').html('<p>All set</p>');
  // $('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>All signed up and ready to go.</p>')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#status-message').html('<p>Unable to sign up.  Please try again.</p>')
  // $('#auth-result').html('<p>No bueno</p>');
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#status-message').html('<p>All signed in</p>')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-btn').show()
  $('#show-change-password').show()
  $('#show-add-game').show()
  $('#show-update-game').show()
  $('#index-games-btn').show()
  $('#show-find-game').show()
  $('#show-delete-game').show()

  store.user = response.user
}

const onSignInFailure = function () {
  $('#status-message').html(
    '<p>Unable to sign in.  Check your credentials and try again.</p>'
  )
}

const onSignOutSuccess = function () {
  $('#status-message').html('<p>Signed out successfully.</p>')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-btn').hide()
  $('#show-change-password').hide()
  $('#show-add-game').hide()
  $('#find-game-form').hide()
  $('#delete-game-form').hide()
  $('#index-games-btn').hide()
  $('#show-update-game').hide()
  $('#update-game-form').hide()
  $('#add-game-form').hide()
  $('#show-find-game').hide()
  $('#show-delete-game').hide()
  $('#games-display').html('<p></p>')
  $('#change-password-form').hide()

  store.user = null
  store.response = null
}

const onSignOutFailure = function () {
  $('#status-message').html('<p>Error signing out</p>')
}

const onChangePasswordSuccess = function () {
  $('#status-message').html('<p>Password successfully.</p>')
  $('form').trigger('reset')
  $('#show-change-password').hide()
}

const onChangePasswordFailure = function () {
  $('#status-message').html('<p>Error changing password</p>')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
