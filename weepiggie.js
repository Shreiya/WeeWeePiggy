var maze = [
0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,
0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,
0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,
1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,
0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,
0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,
0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,
0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,
0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,
0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,
0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,
0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,
0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,
0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,
0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
];
var div=document.getElementById('container');
var piggieLocation=0;
for(i=0;i<maze.length;i++)
{
if(i%19==0)
div.innerHTML+="<br>";
if(maze[i]==0)
{
if(i==0)
{
div.innerHTML+='<div id="block-'+i+'" style="display:inline-block;height:20px;width:20px;background-color:blue;margin:5px;"><div id="piggie" style="width:10px;height:10px;corner-radius:15px;background-color:yellow;margin:0 auto;"></div></div>';
}
else
{
div.innerHTML+='<div id="block-'+i+'" style="display:inline-block;height:20px;width:20px;background-color:blue;margin:5px;"></div>';
}
}
if(maze[i]==1)
{
div.innerHTML+='<div class="noPiggie" id="block-'+i+'" style="display:inline-block;height:20px;width:20px;background-color:black;margin:5px;"></div>';
}
if(maze[i]==2)
{
div.innerHTML+='<div id="block-'+i+'" style="display:inline-block;height:20px;width:20px;background-color:white;margin:5px;"></div>';
}

}

document.body.addEventListener("keyup",function(e){
//38 up, 40 down, 37 left, 39 right
if (((e.keyCode == 39 && (piggieLocation+1) % 19 == 0) || (e.keyCode == 37 && piggieLocation % 19 == 0)) && piggieLocation!=0)
return;

if(e.keyCode==39 && (piggieLocation + 1 <= 360) && (piggieLocation + 1 >= 0) && !document.getElementById('block-' + (piggieLocation + 1)).classList.contains('noPiggie'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" style="width:10px;height:10px;corner-radius:15px;background-color:yellow;margin:0 auto;"></div>';
}

if(e.keyCode==40 && (piggieLocation + 19 <= 360) && (piggieLocation + 19 >= 0) && !document.getElementById('block-' + (piggieLocation + 19)).classList.contains('noPiggie'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" style="width:10px;height:10px;corner-radius:15px;background-color:yellow;margin:0 auto;"></div>';
}


if(e.keyCode==38 && (piggieLocation - 19 <= 360) && (piggieLocation - 19 >= 0) && !document.getElementById('block-' + (piggieLocation - 19)).classList.contains('noPiggie'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" style="width:10px;height:10px;corner-radius:15px;background-color:yellow;margin:0 auto;"></div>';
}

if(e.keyCode==37 && (piggieLocation - 1 <= 360) && (piggieLocation - 1 >= 0) && !document.getElementById('block-' + (piggieLocation - 1)).classList.contains('noPiggie'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" style="width:10px;height:10px;corner-radius:15px;background-color:yellow;margin:0 auto;"></div>';
}

var msg = [];
function renderIt () {
  function shuffleMsg(msg) {
    for (var i = msg.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = msg[i];
        msg[i] = msg[j];
        msg[j] = temp;
    }
    return msg;
    //Now I have to write a .innerHTML line but can't figure it out - document.getElementById('display').innerHTML = WHAT
}

}


});
