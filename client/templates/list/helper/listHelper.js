Template.list.helpers({
   list : function(boardId){
     //var templateInstance= this;
     //var boardId = $(".list_container").attr("id");
    // console.log(boardId);
      return List.find({boardid:boardId});
    // return List.find({});
   }
  });
// Template.list.onRendered(function () {
//
//   var templateInstance= this;
//   var boardId = templateInstance.$(".list_container").attr("id");
//   console.log(boardId);
//
// });
