var _ = require("lodash");


var roll = function(sides, numberRolled){ 
  var total = 0
  _.times(numberRolled, function(){
    total = total + (_.random(1, sides));
  });
  return total
};

module.exports = roll
