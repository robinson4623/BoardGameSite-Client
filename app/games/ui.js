('use strict');

const store = require('../store');

const onAddGameSuccess = function () {
  $('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>Game Added</p>');
  $('#sign-up-form').hide();
};

const onAddGameFailure = function () {
  //$('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>Game was not added</p>');
  // $('#sign-up-form').hide();
};

module.exports = {
  onAddGameSuccess,
  onAddGameFailure,
};
