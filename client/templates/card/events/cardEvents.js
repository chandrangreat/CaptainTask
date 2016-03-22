Template.card.events({
  'click .js-card-delete-button': function(event){
      var cardid = this._id;
    $("#"+cardid).hide('slow', function(){
      Meteor.call('deleteCard',cardid);
    });
  },
});
