


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
        artyom.say("Testing sir");
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
artyom.addCommands(panther); // Add the command with addCommands method. Now
artyom.say("Welcome to Felipe's Website")
startOneCommandArtyom(); 

$( ".row .col-xs-12" ).click(function() {
//    console.log( "You clicked a play!" );
//    panther1.play();
   startOneCommandArtyom();    
});

//artyom.simulateInstruction("panther");


//------------------------------------------------ functions -----------------------------------------------------

function startOneCommandArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:false,// recognize 1 command and stop listening !
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        });
    },250);
}

function endOneCommandArtyom(){
    artyom.fatality();// use this to stop any of
}