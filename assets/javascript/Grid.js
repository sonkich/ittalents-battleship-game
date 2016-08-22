function Grid (){

   var field = [];
   var matrixNumber = 7;
   var shipNumber = 3;
   var ships = Array(shipNumber);

   for(let i = 0;i < matrixNumber ; i++){
      var temp = Array(matrixNumber);

      field.push(temp);
   }
   createShips();
   this.getField = function (){
      return field;
   }
   this.checkForHit = function (x , y){
      if(field[x][y] != null){
         field[x][y].hit();
         return true;
      }else{
         return false;
      }
   }
   function checkShipSpace(x,y,flag){
      for(let i = 0; i < 3 ; i++){
         if(flag){
            if(field[x+i][y] != null){
               return false;
            }
         }else{
            if(field[x][y+i] != null){
               return false;
            }
         }
      }

      return true;
   }
   function createShips(){
      for(let i = 0; i < shipNumber ; i++){
         var randFlag;

         switch (Math.floor((Math.random() * 2) + 1)) {
            case 1:
               randFlag = true;
               break;
            case 2:
               randFlag = false;
               break;
         }

         var randX = randFlag? (Math.floor((Math.random() * 4) + 1) -1) :
                              (Math.floor((Math.random() * 6) + 1) -1);

         var randY = randFlag? (Math.floor((Math.random() * 6) + 1) -1) :
                              (Math.floor((Math.random() * 4) + 1) -1);

         if(checkShipSpace(randX,randY,randFlag)){
            ships[i] = new Ship(randX,randY,randFlag);

            for(let j = 0; j < 3 ; j++){
               if(randFlag){
                  field[randX+j][randY] = ships[i];
               }else{
                  field[randX][randY+j] = ships[i];
               }
            }
         }else{
            i--;
            continue;
         }
      }
   }
}
