Template.add_board_button.events({
  'click .js-show-board-form' : function(event){
    $("#add_board_form").modal('show');
  }
});

Template.add_board_form.events({
  'submit .js-add-board' : function(event){
    //event.preventDefault();
    var board_name;
    board_name = event.target.board_name.value;
    $(this).find("input[type=text]").val("");
  var  boardid = Board.insert({
      board_name: board_name
    });
    console.log(boardid);
    $("#add_board_form").modal('hide');
    return false;
  }
});
