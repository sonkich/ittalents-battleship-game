$(function(){

   console.log("ready");
   var field,player;
   startGame();
   $('.btn-again').on('click',function(){
       location.reload();
   })



   function checkForEnd(){
      var flag = false;
      if(player.getBullets() == 0 && player.getScore() != 9){
         $('#game-over').css('display','block');
         flag = true;
      }

      if(player.getScore() == 9){
         $('#win').css('display','block');
         flag = true;
      }

      if(flag){
         $('.clickable').unbind('click');

      }
   }

   function uptadeStats(){
      var bullets = player.getBullets();
      var score = player.getScore();

      $('#bullets span').html(bullets);
      $('#hits span').html(score);
   }
   function startGame(){
      field = new Grid();

      player = new Player(field);

      for(var i = 0; i < field.getField().length ; i++){
         for(var j = 0 ; j < field.getField()[i].length ; j++){
            var temp = '';
            // if(field.getField()[i][j] != null){
            //    temp = 'ship';
            // }
            $('#grid').append( '<div class="cell clickable" id="'+ i+j +'">'
            + '<div class="front"></div>'
            + '<div class="back"></div>'
             +'</div>' );
         }
      }

      $('.clickable').on('click',function(e){
         var x = e.currentTarget.id;
         var front = $(e.target);
         var back = $(e.target).next();

         back.toggleClass('back-click');
         front.toggleClass('front-click');

         console.log(x);

         if(player.shoot(x[0],x[1])){

            $(back).toggleClass('boat');
         }else{
            $(back).toggleClass('sea');
         }
         $(e.currentTarget).toggleClass('clickable');
         $(e.currentTarget).unbind('click');
         uptadeStats();
         checkForEnd();
      })
   }
})
