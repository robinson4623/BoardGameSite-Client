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

const onIndexGamesSuccess = function (responseData) {
  const games = responseData.games;

  let gamesHtml = '';

  games.forEach(game => {
    gamesHtml += `
      <h4>Title: ${game.name}</h4>
      <p>Type: ${game.gameType}</p>
      <p>Players: ${game.numOfPlayers}</p>
      <p>Rating: ${game.rating}</p>
      <p>ID: ${game._id}</p>
       
 
      <br>
        `;
    //  <form class="games-update-dynamic" data-id=${game._id}>
    //     <input type="text" name="game[title]" placeholder="Game Title Here" required>
    //     <input type="text" name="game[gameType]" placeholder="Game Type Here" required>
    // <button type="submit">Update Game</button>
    // </form>
    // <button class="games-destroy-dynamic" data-id=${game._id}>Delete Game</button>
  });

  //$('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#games-display').html(gamesHtml);
  //$('#sign-up-form').hide();
};

const onIndexGamesFailure = function () {
  //$('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#show-games-area').html('<p>Games are not showing</p>');
  // $('#sign-up-form').hide();
};

const onUpdateGameSuccess = function () {
  $('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>Game Successfully Updated</p>');
  //$('#sign-up-form').hide();
};

const onUpdateGameFailure = function () {
  //$('form').trigger('reset');
  //$('#auth-result').html('<p>All set</p>');
  //$('#sign-up-form').css('display', 'none');
  // $('#sign-up-head').html('<p>Signed up and ready to go!</p>');
  $('#status-message').html('<p>Game was not updated</p>');
  // $('#sign-up-form').hide();
};

module.exports = {
  onAddGameSuccess,
  onAddGameFailure,
  onIndexGamesSuccess,
  onIndexGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
};
