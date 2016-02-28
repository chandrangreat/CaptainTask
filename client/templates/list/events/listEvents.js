Template.list.events({
  'click .js-list-delete-button': function(event){
    List.remove(this._id);
  }
});
