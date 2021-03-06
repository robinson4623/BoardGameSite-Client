('use strict')

const store = require('../store.js')
const config = require('../config')

const addGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexGames = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const updateGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + data.games.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteGame = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games/' + data.games.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showGame = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data.games.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

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
  indexGames,
  updateGame,
  deleteGame,
  showGame
}
