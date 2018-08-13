angular.
  module('WineFinder')
  .factory('messages', function(){
    var messages = {};

    messages.list = [];

    messages.add = function(message){
      messages.list.push({text: message});
    };

    return messages;

    /*
  return {
    setData: function(food) {
      savedData.fo = food;
    },
    getData: function() {
      return savedData;
    }
  };*/

    });