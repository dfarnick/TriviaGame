

$(document).ready(function(){
    
    
    
    let incorrect = 0;
    let seconds = 1000;
    let outOfTime = 0;
    let timer = 3;
    let isRunning = false;
    let correct = 0;
    
    $("#after-submit").hide();
    $("#quiz").hide();
    $("#resetButton").hide();
    $('#timeleft').hide();

    $("#startButton").on("click", function(){
    $("#timeleft").show();
    $("#startButton").hide();
    $("#quiz").show();
        
        startTimer();
        
        function startTimer(){
            if (!isRunning) {
                intervalId = setInterval(decrement, seconds);
                isRuning = true;
            }
        }
        function decrement(){
            $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
            timer --;
            console.log("time: ", timer)
           
            if (timer === -1){
                outOfTime++;
                stop();
            }   $("#outOfTime").html("<h3>Times Up: " + outOfTime +"</h3>");      
        }
        function stop() {
            isRunning = false;
            clearInterval(intervalId);
        }
        
    $("#quiz").submit(function(event){ 
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
        $("#correct").html('Correct: ' + correct);
        $("#incorrect").html('Incorrect: ' + incorrect);
    });   
       
    $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionTwo']:checked",).val();
            
        $("#after-submit").show();
            
        console.log(data)    
        if (data === "salt"){
            correct++
        }
        else{
            incorrect++;
            console.log("false")
        }
        $("#correct").html('Correct: ' + correct);
        $("#incorrect").html('Incorrect: ' + incorrect);
    });
        
        
        $("#quiz").submit(function(event){ 
        event.preventDefault();
        let data = $("input[name='questionThree']:checked",).val();
                
        $("#after-submit").show();
                
        console.log(data)    
        if (data === "dinner"){
            correct++
        }
        else{
            incorrect++;
            console.log("false")
        }
            $("#correct").html('Correct: ' + correct);
            $("#incorrect").html('Incorrect: ' + incorrect);
    });
        
        $("#quiz").submit(function(event){ 
            event.preventDefault();
            let data = $("input[name='questionFour']:checked",).val();
                    
            $("#after-submit").show();
                    
            console.log(data)    
        if (data === "eggs"){
            correct++
        }
        else{
            incorrect++;
            console.log("false")
        }
            $("#correct").html('Correct: ' + correct);
            $("#incorrect").html('Incorrect: ' + incorrect);
        });        
           
        $("#quiz").submit(function(event){ 
            event.preventDefault();
            let data = $("input[name='questionFive']:checked",).val();
                        
            $("#after-submit").show();
                        
            console.log(data)    
        if (data === "loneliness"){
            correct++
        }
        else{
            incorrect++;
            console.log("false")
        }
            $("#correct").html('Correct: ' + correct);
            $("#incorrect").html('Incorrect: ' + incorrect);
        });
       
            
        $("#quiz").submit(function(event){ 
            event.preventDefault();
            let data = $("input[name='questionSix']:checked",).val();
               
            $("#after-submit").show();                       
            console.log(data)    
        if (data === "an individual"){
            correct++
        }
        else{
            incorrect++;
            console.log("false")
        }
            $("#correct").html('Correct: ' + correct);
            $("#incorrect").html('Incorrect: ' + incorrect);
        });
    });
});