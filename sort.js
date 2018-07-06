var list = [];

module.exports = {
  addToList: function(num){
    list.push(num);

  },
  getSortedList: function(){
    list.sort(function(a,b){return a-b});



    return list;
  }


};




  // module.exports = function(store);