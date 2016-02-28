Template.board.events({
  'click .js-board-delete-button': function(event){
    var boardid = this._id;
    Board.remove(this._id);
  }
});
