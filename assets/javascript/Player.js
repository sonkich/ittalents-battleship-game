
function Player (grid){
   var bullets= 20;
   var score=0;
   var grid = grid;
   this.getBullets = function (){
      return bullets;
   }

   this.getScore = function (){
      return score;
   }
   this.shoot = function (x,y) {
      bullets--;

      if(grid.checkForHit(x,y)){
         score++;
         return true;
      }

      return false;
   };
}
