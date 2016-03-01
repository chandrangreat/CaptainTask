Template.card.events({
  'click .js-card-delete-button': function(event){
    Card.remove(this._id);
  }
});
