('use strict');

const authApi = require('./api');
const authUi = require('./ui');
const getFormFields = require('./../../lib/get-form-fields');

const onSignUp = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure());
};

const onSignIn = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  authApi
    .signIn(data)
    .then(response => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure());
};

const onSignOut = function () {
  console.log('Sign out event');
  //$('#0').html(<img src=""></img>);
  //`<img src="${store.currentPlayerImage}" height="120px" width="120px">`;
  authApi
    .signOut()
    .then(response => authUi.onSignOutSuccess(response))
    .catch(() => authUi.onSignInFailure());
};

const onChangePassword = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  authApi
    .changePassword(data)
    .then(response => authUi.onChangePasswordSuccess(response))
    .catch(() => authUi.onChangePasswordFailure());
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
};
