var memoryAr =
['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','J','J','K','K','L'];
var memoryVal = [];
var memoryTileId = [];
var tileFlip = 0;
Array.prototype.memoryTileShuf = function() {
  var i = this.length, j , temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}
function newBrd() {
  tileFlip = 0;
  var output = '';
  memoryAr.memoryTileShuf();
  for (var i = 0; i < memoryAr.length; i++) {
    output += '<div id = "tile_'+i+'" onclick = "memoryFlipTile(this,\''+memoryAr[i]+'\')"></div>';
  }
    document.getElementById('memoryBrd').innerHTML = output;
}
function memoryFlipTile(tile,val) {
  if(tile.innerHTML == "" && memoryVal.length < 2) {
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    if(memoryVal.length ==0) {
        memoryVal.push(val);
        memoryTileId.push(tile.id);
      } else if (memoryVal.length == 1) {
        memoryVal.push(val);
        memoryTileId.push(val);
        if (memoryVal[0] == memoryVal[1]) {
          tileFlip += 2; //Clear the arrays
          memoryVal = [];
       memoryTileId = [];
       //Now to check if the board is cleared
       if (tileFlip == memoryAr.length) {
         alert("Yay! You're good to go!\nOr wait! Have another go at it!");
         document.getElementById('memoryBrd').innerHTML = "";
         newBrd();
       }
     } else {
       function flipback() {
         var tile1 = document.getElementById(memoryTileId[0]);
         var tile2 = document.getElementById(memoryTileId[1]);
         tile1.style.background = 'url("http://i.imgur.com/hwqSIfI.png?1")';
         tile1.innerHTML = "";
         tile2.style.background = 'url("http://i.imgur.com/hwqSIfI.png?1")';
         tile2.innerHTML = "";
         memoryVal = [];
         memoryTileId = [];
       }
       setTimeout(flipback, 1000);
     };
   };
 };
     }

    newBrd();
