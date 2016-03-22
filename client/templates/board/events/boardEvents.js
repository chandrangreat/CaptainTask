Template.board.events({
  'click .js-board-delete-button': function(event){
    var boardid = this._id;

    $("#"+boardid).hide('slow', function(){
      Meteor.call("deleteBoard",boardid);
    });
  }
});
