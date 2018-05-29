var numAddAnim = {
	 // 小数的增加
            numAnimFloat : function(selector,value){
              var decimal_places = 1;
              var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
              $("#"+selector).animateNumber(
                {
                  number: value * decimal_factor,
                  // number : 79863,
                  color: 'green',
                  // 'font-size': '30px',

                  numberStep: function(now, tween) {
                    // alert(decimal_factor);
                    var floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);
                    if (decimal_places > 0) {
                      floored_number = floored_number.toFixed(decimal_places);
                    }

                    target.text(floored_number );
                  }
                },
                3500
              )
            },
            // 整数的增加
            numAnimInt : function(selector,value){
                var decimal_places = 1;
                var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

                  $("#"+selector).animateNumber(
                    {
                      number: value * decimal_factor,
                      // number : 79863,
                      color: 'green',
                      // 'font-size': '2.2em',

                      numberStep: function(now, tween) {
                        // alert(decimal_factor);
                        var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                        if (decimal_places > 0) {
                          floored_number = floored_number.toFixed(decimal_places);
                        }
                        floored_number = parseInt(floored_number);
                        target.text(floored_number );
                      }
                    },
                    3500
                )
            },
        
}