Template.card.events({
  'click .js-card-delete-button': function(event){
      var cardid = this._id;
    $("#"+cardid).hide('slow', function(){
        Card.remove({"_id":cardid});
    });
  },
  'click .card-container': function(event){
    //alert('Hello');
  }
});
