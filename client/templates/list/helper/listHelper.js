Template.list.helpers({
   list : function(boardId){
      return List.find({boardid:boardId});
   }
  });
