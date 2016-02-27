Template.add_list_button.events({
  'click .js-show-list-form' : function(event){
    $("#add_list_form").modal('show');
  }
});

Template.add_list_form.events({
  'submit .js-add-list' : function(event){
    event.preventDefault();
    var list_name;
    list_name = event.target.list_name.value;
    $(this).find("input[type=text]").val("");
  // var  id = Board.insert({
  //     board_name: board_name
  //   });
  //  console.log(boardid);
    $("#add_list_form").modal('hide');
    return false;
  }
});
