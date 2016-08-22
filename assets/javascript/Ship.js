function Ship (x,y,flag){

   var cells = Array(3);
   var hits = 0;


   cells[0] = {
      'x' : x,
      'y' : y,
      'isHit': false
   }

   cells[1] = {
      'x' : flag? (parseInt(x)+1) : x,
      'y' : flag? y : (parseInt(y)+1),
      'isHit': false
   }

   cells[2] = {
      'x' : flag? (parseInt(x)+2) : x,
      'y' : flag? y : (parseInt(y)+2),
      'isHit': false
   }

   this.isDead = function () {
      if(hits >= 3) {
         return true;
      }

      return false;
   }

   this.hit = function(x,y){
      for(let i; i < cells.length ; i++){

         if(cells[i]['x'] != x ){
            continue;
         }
         if(cells[i]['y'] != y ){
            continue;
         }

         cells[i]['isHit'] = true;
         hits++;

         return cells[i]['isHit'];
      }
   }
}
