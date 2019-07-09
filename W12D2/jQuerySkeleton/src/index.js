const View = require('./ttt-view');
const Game = require('../../nodesolution/game');// correct path?

  $(() => {
    const $someJQueryObject = $('.ttt')  // grabs a class from index
    const game = new Game();
    const view = new View(game, $someJQueryObject)
  });


  


