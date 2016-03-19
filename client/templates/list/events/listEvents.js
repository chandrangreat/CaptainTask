Template.list.events({
  'click .js-list-delete-button': function(event){
    var listid = this._id;
    $("#"+listid).hide('slow', function(){
        List.remove({"_id":listid});
    });
  }
});
