
let user_player =prompt("enter your choose ");

let copmuter_player = Math.random();
        if (copmuter_player < 0.34) {
            copmuter_player = "rock";
        } else if(copmuter_player >0.34) {
            copmuter_player = "paper";
        } else {
            copmuter_player = "scissors";}
       

function result(player_1,player_2) {
if (player_1=="rock"&& player_2=="paper")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User wins");}
else if (player_1=="rock"&& player_2=="scissors")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User lose");}
else  if (player_1=="paper"&& player_2=="scissors")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User wins");}

else if (player_1=="paper"&& player_2=="rock")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User lose");}
else if (player_1=="scissors"&& player_2=="rock")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User wins");}
else  if (player_1=="scissors"&& player_2=="paper")
{ console.log(" Computer picked: "+player_1+". User picked: "+player_2+". User lose");}
else {console.log(" Computer picked: "+player_1+". User picked: "+player_2+". they are equal ");}

}
result(copmuter_player,user_player);