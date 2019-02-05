$(document).ready(function(){    
    let incorrect = 0;
    let seconds = 1000;
    let timer = 30;
    let isRunning = false;
    let correct = 0;
    let intervalId;
    
    $("#after-submit").hide();
    $("#quiz").hide();
    $("#resetButton").hide();
    $('#timeleft').hide();

function newGame() {
        correct = 0;
        incorrect = 0;
        timer = 30;        
    };
    $("#startButton").on("click", function(){
    $("#timeleft").show();
    $("#startButton").hide();
    $("#quiz").show();  	
        
function startTimer(){
     if (!isRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, seconds);
        isRuning = true;                
        }
    }
function decrement(){    
        timer --;
        console.log("time: ", timer)
        $("#timeleft").html("<h3>You're the next contestant on 'Brain Drain':" + " " + timer + "</h3>");           
    if (timer === -1){
        outOfTime++;
        $("#timeleft").hide();
        $("#resetButton").show();
        $("#quiz").hide();
        $("#startButton").hide();
        stop();        
    $("#outOfTime").html("<h3>I'm... COUNTING ON IT!</h3>"); 
        }        
    }
function stop() {
        sRunning = false;
        clearInterval(intervalId);
    }
        startTimer();

    $("#quiz").submit(function(event){
        stop();
        event.preventDefault();
        let data = $("input[name='questionOne']:checked",).val();        
    $("#after-submit").show();        
        console.log(data)
    if (data === "love"){
        correct++
        }
    else{
        incorrect++;
        console.log("false")
        } 
        $("#quiz").hide(); 
        $('#timeleft').hide();
        $("#outOfTime").hide();  
});          
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionTwo']:checked",).val();            
    $("#after-submit").show();    
    if (data === "salt"){
        correct++
        }
        else{
        incorrect++;
        }    
});        
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionThree']:checked",).val();                
    $("#after-submit").show();    
    if (data === "dinner"){
        correct++
        }
    else{
        incorrect++;
        }    
});        
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionFour']:checked",).val();                    
    $("#after-submit").show();    
    if (data === "eggs"){
        correct++
        }
    else{
        incorrect++;
        }        
});                   
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionFive']:checked",).val();                        
    $("#after-submit").show();           
    if (data === "loneliness"){
        correct++
        }
    else{
        incorrect++;        
        }    
});            
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionSix']:checked",).val();               
    $("#after-submit").show();       
    if (data === "an individual"){
        correct++
        }
    else{
        incorrect++;        
        }
    $("#correct").html('Correct: ' + correct);
    $("#incorrect").html('Incorrect: ' + incorrect);
    $("#resetButton").show();       
        });

        //////tried to get the reset button to 'uncheck' the radios. Couldn't get it to take.
    $("#resetButton").on("click", function(){      
        newGame();
        startTimer();
    $("#quiz").show();
    $("#timeleft").show();
    $("#resetButton").hide();
    $("#after-submit").hide();
        });
    });
});