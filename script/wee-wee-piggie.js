// var a = prompt("Are you over the age of 18?");
// if ( a === "yes") {
//   alert("Cool! Come on in!");
// } else {alert("K. Bai.");
// }  //sorry

var maze = [
0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,"b",0,0,1,0,0,0,0,0,1,0,0,0,0,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,
1,0,"c",0,0,1,0,"k",0,0,1,1,1,0,0,0,0,1,1,
1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,
1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,"o",0,1,0,0,1,0,0,1,1,
1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,
1,0,1,0,0,0,1,0,0,1,0,0,"m",0,1,0,0,1,1,
1,0,1,0,0,0,0,"w",0,1,1,0,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,
1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,
1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,
1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];
var msgAr = ["FORWARD MARCH! MAGIC TRUFFLES AHEAD.",
              "Just wanna get home, netflix and swill.",
              "Rasher decisions to be made!",
              "This little piggy might just become a threat to national charcuterie.",
              "Don't worry piggy. You're not aloin.",
              "Move on, move on! Stop being such a boar.",
              "Oh my lardy lard piggy. What a mess you've got yourself into.",
              "I see that taking shorcuts are snout your style.",
              "I think we're really slaughtering the puns here.",
              "Piggie! If you don't get home right now, you're going to barn in hell!"];
var randomMsg = "";


function generateMsg () {
  var random = Math.floor((Math.random() * 10));
  console.log(random);
  if (randomMsg === msgAr[random])
  generateMsg();
  else
  document.getElementById('display').innerHTML = msgAr[random];
}

 function checkForIncentives()
 {

      var incentiveBacon= 24;
      var incentiveClown=59;
      var incentiveKanye=64;
      var incentiveOink=142;
      var incentiveMagic=202;
      var incentiveWig=216;
 if(piggieLocation+1==incentiveBacon || piggieLocation-1==incentiveBacon || piggieLocation+19==incentiveBacon || piggieLocation-19==incentiveBacon)
{
var d = document.getElementById("block-"+incentiveBacon);
d.className = "block bacon";
 }

if(piggieLocation==incentiveBacon){
  document.getElementById('display').innerHTML = "AAAAHHH! This bacon piggy's heart.";
} if(piggieLocation+1==incentiveKanye || piggieLocation-1==incentiveKanye || piggieLocation+19==incentiveKanye || piggieLocation-19==incentiveKanye)
{
var d = document.getElementById("block-"+incentiveKanye);
d.className = "block kanye";
}
if(piggieLocation==incentiveKanye){
 document.getElementById('display').innerHTML = " Oh hey Kanye! *When you find bae just sitting behind a rock, duin nuthin.*";
} if(piggieLocation+1==incentiveWig || piggieLocation-1==incentiveWig || piggieLocation+19==incentiveWig || piggieLocation-19==incentiveWig)
{
var d = document.getElementById("block-"+incentiveWig);
d.className = "block wig";
}
if(piggieLocation==incentiveWig){
 document.getElementById('display').innerHTML = "You wear that wig and groove, piggy. Groove.";
} if(piggieLocation+1==incentiveMagic || piggieLocation-1==incentiveMagic || piggieLocation+19==incentiveMagic || piggieLocation-19==incentiveMagic)
{
var d = document.getElementById("block-"+incentiveMagic);
d.className = "block magic";
}
if(piggieLocation==incentiveMagic){
 document.getElementById('display').innerHTML = "Are those magic truffles? Ohh yeaahh! Piggy doin goooood.";
} if(piggieLocation+1==incentiveClown || piggieLocation-1==incentiveClown || piggieLocation+19==incentiveClown || piggieLocation-19==incentiveClown)
{
var d = document.getElementById("block-"+incentiveClown);
d.className = "block clown";
}
if(piggieLocation==incentiveClown){
 document.getElementById('display').innerHTML = "AAAAHHH! Clowns make piggy wet pants. Wait. Piggy don't wear pants.";
} if(piggieLocation+1==incentiveOink || piggieLocation-1==incentiveOink || piggieLocation+19==incentiveOink || piggieLocation-19==incentiveOink)
{
var d = document.getElementById("block-"+incentiveOink);
d.className = "block oink";
}
if(piggieLocation==incentiveOink){
 document.getElementById('display').innerHTML = "OOOO Oinkment! Piggy likes his pork-belly rubs.";
}

};

   //code for showing the messages.




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
div.innerHTML+='<div id="block-'+i+'" class="block green"><div id="piggie" class="piggie"></div></div>';
}
else
{
div.innerHTML+='<div id="block-'+i+'" class="block green"></div>';
}
}
if(maze[i]=="k" || maze[i]=="b" || maze[i]=="m" || maze[i]=="w" || maze[i]=="o" || maze[i]=="c")
{
div.innerHTML+='<div id="block-'+i+'" class="block treasureChest"></div>';
console.log(maze[i] + " " + i)
}
if(maze[i]==1)
{
div.innerHTML+='<div id="block-'+i+'" class="block tree"></div>';
}
if(maze[i]==2)
{
div.innerHTML+='<div id="block-'+i+'" class ="block white"></div>';
}

}

document.body.addEventListener("keyup",function(e){
  generateMsg();
//38 up, 40 down, 37 left, 39 right
//

if (((e.keyCode == 39 && (piggieLocation+1) % 19 == 0) || (e.keyCode == 37 && piggieLocation % 19 == 0)) && piggieLocation!=0)
return;

if(e.keyCode==39 && (piggieLocation + 1 <= 360) && (piggieLocation + 1 >= 0) && !document.getElementById('block-' + (piggieLocation + 1)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class ="piggie"></div>';
}

if(e.keyCode==40 && (piggieLocation + 19 <= 360) && (piggieLocation + 19 >= 0) && !document.getElementById('block-' + (piggieLocation + 19)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}


if(e.keyCode==38 && (piggieLocation - 19 <= 360) && (piggieLocation - 19 >= 0) && !document.getElementById('block-' + (piggieLocation - 19)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}

if(e.keyCode==37 && (piggieLocation - 1 <= 360) && (piggieLocation - 1 >= 0) && !document.getElementById('block-' + (piggieLocation - 1)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}
if (piggieLocation == 37)
div.innerHTML = "<div class='win'><img src='images/newPig.png' /><br>PIGGY'S HOME!</div>";

checkForIncentives();




});
