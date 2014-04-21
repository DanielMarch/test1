(function(){
  'use strict';

  $(document).ready(init);

  var string = $('#input').val();
  var strings = string.split(',');

  function init(){
    $('#square').click(square);
  }

  function square(){
    for(var i = 0; i < strings.length; i++){
      var $div = $('<div>');
      var x = i;
      var y = i;
      $div.text(strings[i].Math.pow(x, y));
      $('#box').append($div);
    }
  }

})();
