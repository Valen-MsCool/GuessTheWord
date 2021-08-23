answer_turn = 2;
player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn " + player2_name;
function send() {
getWord = document.getElementById("word").value;
Clue = document.getElementById("clue").value;
word = getWord.toLowerCase();
console.log(word);
charAt1=word.charAt(1);
console.log(charAt1);
length_divide_2=Math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);
console.log(charAt2);
length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
console.log(charAt3);
remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);
question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
question_clue="<h4 id='word_display'>Clue: "+Clue+"</h4> <br>";
input_box="<br> Answer : <input type = 'text' id = 'input_check_box'>";
check_button="<br> <br> <button class= 'btn btn-info' onclick='check()'>Check</button>";
row = question_word+question_clue+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=""; 
document.getElementById("clue").value=""; 
}
function check(){
    console.log("check");
var getanswer = document.getElementById("input_check_box").value;
    if (getanswer == word || getanswer == getWord){
if (answer_turn == 1){
    player1_score=player1_score+1;
    answerturn=2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player_question").innerHTML="Question Turn "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn "+player2_name;
answer_turn=2;

}else if (answer_turn == 2) {
    player2_score=player2_score+1;
    answerturn=2;
    document.getElementById("player2_score").innerHTML=player2_score;
    document.getElementById("player_question").innerHTML="Question Turn "+player2_name;
    document.getElementById("player_answer").innerHTML="Answer Turn "+player1_name;
    answer_turn=1;
}

document.getElementById("output").innerHTML="";


    }else{
        if (answer_turn == 1){
            
            answerturn=2;
        document.getElementById("player1_score").innerHTML=player1_score;
        document.getElementById("player_question").innerHTML="Question Turn "+player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn "+player2_name;
        answer_turn=2;
        
        }else if (answer_turn == 2) {
         
            answerturn=2;
            document.getElementById("player2_score").innerHTML=player2_score;
            document.getElementById("player_question").innerHTML="Question Turn "+player2_name;
            document.getElementById("player_answer").innerHTML="Answer Turn "+player1_name;
            answer_turn=1;
        }
        document.getElementById("output").innerHTML="";



        
    }





}

function logout(){

localStorage.removeItem("player_1");

localStorage.removeItem("player_2");
window.location="index.html";

}
