Template.add_list_button.events({
  'click .js-show-list-form' : function(event){
    var boardid = $(event.currentTarget).data('boardid');
    $(".modal-body #form-list-name").attr('data-boardid',boardid);
    $("#add_list_form").modal('show');

  }
});

Template.add_list_form.events({
  'submit .js-add-list' : function(event){
    event.preventDefault();
    var list_name;
    var boardId="";
        var boardId = event.target.list_name.getAttribute('data-boardid'); //$(event.currentTarget.list_name).data('boardid');
    list_name = event.target.list_name.value;
    $(this).find("input[type=text]").val("");
    Meteor.call("insertList",boardId,list_name);
    event.target.list_name.value='';
    $("#add_list_form").modal('hide');
    return false;
  }
});
