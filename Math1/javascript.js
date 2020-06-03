var play = false;
var score;
var action;
var remtime;
var correctAnswer;

document.getElementById("starr").onclick = 
function(){
    
    if(play == true){
        //reloading page
        location.reload();
        
    }
    else{
        score = 0;
        remtime = 60;
       
        document.getElementById("value").innerHTML = score;
        document.getElementById("remainingval").innerHTML = remtime;
        document.getElementById("time").style.display = "block";
        document.getElementById("startr").innerHTML = "Reset Game";
        
        hide("gameover");
        play = true;
        
        //start countdown
        startCountdown();
        generateQA();
        
    }
    for(i=1;i<5;i++){
        document.getElementById("box"+i).onclick =
        function(){
            if(play){
                if(this.innerHTML == correctAnswer){
                    show("correct");
                    hide("wrong");
                    setTimeout(function(){
                        hide("correct");
                    }, 1000);
                    score++;
                    document.getElementById("value").innerHTML = score;
                    generateQA();
                }else{
                    show("wrong");
                    hide("correct");
                    setTimeout(function(){
                        hide("wrong");
                    }, 1000);
                }
            } 
        
    }
}

    }
function startCountdown(){
    action = setInterval(function(){
        remtime -= 1;
       document.getElementById("remainingval").innerHTML = remtime;
        if(remtime == 0){
            stopCountdown();
        }
    }, 1000);
}

function stopCountdown(){
    clearInterval(action);
    document.getElementById("gameover").style.display = "block";
    document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your score is "+ score +".</p>"
    
    hide("time");
    hide("correct");
    hide("wrong");
    play = false;
    document.getElementById("startr").innerHTML = "Start Game";
    
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}
function generateQA(){
    var x,y;
    x = 1+Math.round(9*Math.random());
    y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPos = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPos).innerHTML =correctAnswer;
    
    for(i=1;i<5;i++){
        if(i != correctPos){
            var wrongAnswer = 1+Math.round(99*Math.random());
            while(wrongAnswer == correctAnswer){
                wrongAnswer = 1+Math.round(99*Math.random());
            }
            document.getElementById("box"+i).innerHTML =wrongAnswer;
        }
    }
}

