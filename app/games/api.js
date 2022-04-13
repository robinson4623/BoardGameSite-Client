('use strict');

const store = require('../store.js');
const config = require('../config');

const addGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
    data,
  });
};

// const signIn = function (data) {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/sign-in',
//     data,
//   });
// };

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
    },
  });
};

// const getGames = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token,
//     },
//   });
// };

module.exports = {
  addGame,
};