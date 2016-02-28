Template.board.events({
  'click .js-board-delete-button': function(event){
    var boardid = this._id;
    //List.remove({boardid: boardid});
    Board.remove(this._id);

  }
});
