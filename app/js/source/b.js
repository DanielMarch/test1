(function(){
  'use strict';

  $(document).ready(init);

  var heads = 0;
  var tails = 0;

  function init(){
    $('.flip').click(flip);
  }

  function flip(){
    var random = Math.random() * 1;
    if(random < 0.5){
    heads++;
    $('#headcount').text(heads);
  }else{
    tails++;
    $('#tailcount').text(tails);
    }
  }

})();
