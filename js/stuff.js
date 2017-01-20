//------------------------------------------------ Variables -----------------------------------------------------
var tester  = new Howl({
    src: ['Lil Uzi Vert - Seven Million ft. Future.mp3']
})

var panther1  = new Howl({
    src: ['panther4.mp3']
})

var dolphin1  = new Howl({
    src: ['dolphin1.mp3']
})

var dogbark1  = new Howl({
    src: ['dogbark2.mp3']
})

var coyote1  = new Howl({
    src: ['coyote3.mp3']
})

var testing = {
    indexes:["Play song", "Uzi", "Play some trap"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        tester.play();
    }
};

var panther = {
    indexes:["panther", "play panther", "panther sound"],
    action:function(){
        panther1.play();
    }
};


//------------------------------------------------ RUNS -----------------------------------------------------
artyom.addCommands(testing);
artyom.addCommands(panther);
//artyom.say("Welcome to Felipe's Website")
startContinuousArtyom();

//fubar(dolphin1);
//askAQuestion("What is this animal?", ["Panther", "Black Panther", "I don't know"], "Panther");
askAQuestion("hello is this animal?", ["Dolphin", "A Dolphin", "I don't know"], dolphin1);

$( ".row .col-xs-12" ).click(function() {
   startOneCommandArtyom();    
});

//artyom.simulateInstruction("panther");


//------------------------------------------------ functions -----------------------------------------------------

function playSound(soundish){
    soundish.play();
}

function askAQuestion (question, options, noise){
    noise.play();
    setTimeout(function(){
        artyom.newPrompt ({
        question: question,
        options: options,
        onMatch: (i) => {
        var action;
        if (i == 0){
            artyom.say("Correct");
        }
        else{
            artyom.say("Incorrect");
        }

        return action;
        }
        })}, 3000);
    
}

function startOneCommandArtyom(){
    artyom.fatality();                              // use this to stop any of

    setTimeout(function(){                          // if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",                           // A lot of languages are supported. Read the docs !
            continuous:false,                       // recognize 1 command and stop listening !
            listen:true,                            // Start recognizing
            debug:true,                             // Show everything in the console
            speed:1                                 // talk normally
        });
    },250);
}

function endOneCommandArtyom(){
    artyom.fatality();                              // use this to stop any of
}

/* This function activates artyom and will listen all that you say forever 
(requires https conection, otherwise a dialog will request if you allow 
the use of the microphone)
*/
function startContinuousArtyom(){
    artyom.fatality();                  // use this to stop any of

    setTimeout(function(){              // if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",               // A lot of languages are supported. Read the docs !
            continuous:true,            // Artyom will listen forever
            listen:true,                // Start recognizing
            debug:true,                 // Show everything in the console
            speed:1                     // talk normally
        });
    },250);
}