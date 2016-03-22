  Meteor.methods({
    insertBoard : function(board_name){
      Board.insert( {board_name: board_name} );
    },
    deleteBoard : function(boardid){
      Board.remove( {"_id":boardid} );
      try{
        List.remove( { "boardid": boardid} );
      }
      catch(err){
        alert(err);
      }
    },
    insertList: function(boardId,list_name){
      List.insert( { list_name: list_name, boardid: boardId} );
    },
    deleteList: function(listid){
      List.remove( {"_id":listid} );
      try{
        Card.remove( { "listid": listid} );
      }
      catch(err){
        alert("Error List" + err);
      }
    },
    insertCard: function(card_name,listId){
      Card.insert( {card_name: card_name, listid: listId} );
    },
    deleteCard: function(cardid){
        Card.remove( {"_id":cardid} );
    }
  });
