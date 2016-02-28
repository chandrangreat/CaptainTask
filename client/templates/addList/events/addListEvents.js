Template.add_list_button.events({
  'click .js-show-list-form' : function(event){
    var boardid = $(event.currentTarget).data('boardid');
    $("#add_list_form").modal('show');
      $(".modal-body #form-list-name").attr('data-boardid',boardid);
  }
});

Template.add_list_form.events({
  'submit .js-add-list' : function(event){
    event.preventDefault();
    var list_name;
    list_name = event.target.list_name.value;
    var boardid =  $(event.target.list_name).data('boardid');
    $(this).find("input[type=text]").val("");
  List.insert({
      list_name: list_name,
      boardid: boardid
    });
    $("#add_list_form").modal('hide');
    return false;
  }
});
