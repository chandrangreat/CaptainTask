Template.card.helpers({
   card : function(listId){
      return Card.find({listid:listId});
   }
  });
  Template.card.helpers({
     card : function(listId){
        return Card.find({listid:listId});
     }
    });

  Template.card.onRendered(function(){
    var templateInstance = this;

    $( ".sortable" ).sortable({
       revert: true,
       cursor: "all-scroll"
     });
     $( ".draggable" ).draggable({
       connectToSortable: ".sortable",
       revert: "true",
       //containment:"list-container"
      // cursor: "all-scroll"
     });
  });
