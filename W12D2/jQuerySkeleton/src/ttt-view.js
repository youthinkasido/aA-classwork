class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el
    
   
    this.setupBoard();
    this.bindEvents();

  } // on = event, child selector
    // is e reffering to event?
    bindEvents() { // when user clicks a cell, call playMove, add alert for bad moves
      
      this.$el.on("click", 'li', (e) => {
      const $li = $(e.currentTarget);
      this.makeMove($li);
    }) 


  }


  makeMove($square) {
    let pos = $square.data("pos");
    const piece = this.game.currentPlayer
    try {
      this.game.playMove(pos);
      $square.append(piece);
      
    }
    catch(err) {
      alert(err.msg);
    }

    // const piece = this.game.currentPlayer
   $square.addClass("marked")
  //  $square.append(piece)
  }

  setupBoard() {
    // console.log('hi there!')
    const $unorderedList = $('<ul>') // creates jquery object
    $unorderedList.appendTo($(this.$el));

    for (let i = 0; i < 3; i ++) {
      for (let j = 0; j < 3; j ++) {
        const $li = $('<li>')
        $li.appendTo($unorderedList);
        $li.data("pos", [i, j])
      }
    }
  }
}

//generate list items on this page? /
//appendTo to appends reciever to argument
//append is vice versa
//try catch / alert
//how do we get letters 
//



module.exports = View;


// $('<li>').text(text).appendTo($(".ttt"))


//questions = 
// line 13 in board.js, hows it work?