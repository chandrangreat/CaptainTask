Template.add_card_button.events({
  'click .js-show-card-form' : function(event){
    
    var listid = $(event.currentTarget).data('listid');
    $(".modal-body #form-card-name").attr('data-listid',listid);
    $("#add_card_form").modal('show');

  }
});

Template.add_card_form.events({
  'submit .js-add-card' : function(event){
    event.preventDefault();
    var card_name;
    var listId="";
        var listId = event.target.card_name.getAttribute('data-listid'); //$(event.currentTarget.list_name).data('boardid');
    card_name = event.target.card_name.value;
    $(this).find("input[type=text]").val("");
  Card.insert({
      card_name: card_name,
      listid: listId
    });
    event.target.card_name.value='';
    $("#add_card_form").modal('hide');
    return false;
  }
});
