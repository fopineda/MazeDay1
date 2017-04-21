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

var drums1  = new Howl({
    src: ['drums1.mp3']
})

var harp1  = new Howl({
    src: ['Harp1.wav']
})

var trumpet1  = new Howl({
    src: ['trumpet1.wav']
})

// MIGHT NOT NEED THIS
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
startContinuousArtyom();

var counter = 0;
var animals = false;
var instruments = false;
var score = 0;

MainMenu();

$( "#something" ).click(function() {
    MainMenu();
    //artyom.fatality(); 
});


//askSoundQuestion(pantherQuestion);
//artyom.simulateInstruction("panther");
//------------------------------------------------ functions -----------------------------------------------------
// To begin
function MainMenu(){
    artyom.say("We have Animals and Instruments sounds");
    var beginingQuestion = new Question("Which would you like to hear?", ["Animals", "Instruments"]);
    askQuestion(beginingQuestion);
}

// ANIMALS
function animalsQuiz(index, score){
    var pantherQuestion = new SoundQuestion("What is this animal?", ["Panther", "Black Panther", "I don't know"], panther1);
    var dolphinQuestion = new SoundQuestion("What is this animal?", ["Dolphin", "A Dolphin", "I don't know"], dolphin1);
    var dogQuestion = new SoundQuestion("What is this animal?", ["Dog", "A Dog","I don't know"], dogbark1);
    var questionsList = [
        pantherQuestion,
        dolphinQuestion,
        dogQuestion,
    ]
    
   if (index == questionsList.length){ // reaches the end of the quiz so go back to main menu
       artyom.say(score);
        MainMenu();
    }
    else{
      setTimeout(askSoundQuestion.bind(null, questionsList[index]), 3000);  
    }
}

// INSTRUMENTS
function instrumentsQuiz(index, score){
    var drumsQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["Drums", "Drum", "I don't know"], drums1);
    var harpsQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["Harp", "Harps", "I don't know"], harp1);
    var trumpetQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["trumpet", "trumpets", "I don't know"], trumpet1);
    var questionsList = [
        drumsQuestion,
        harpsQuestion,
        trumpetQuestion,
    ]
    
    if (index == questionsList.length){  // reaches the end of the quiz so go back to main menu
        artyom.say(score);
        MainMenu();
    }
    else{
      setTimeout(askSoundQuestion.bind(null, questionsList[index]), 3000);  
    }
    
     
}

// SoundQuestion Object (For questions requiring sound before asking question)
function SoundQuestion(myQuestion, myOptions, myNoise){
    // (constructor pattern)
    this.soundQuestion = myQuestion;
    this.soundOptions = myOptions;
    this.soundNoise = myNoise;
}
// SoundQuestion
function askSoundQuestion(questionstuff){
    // It asks a question, listens to answer for options, and then replies with correct or incorrect.
    // Parameter is an object
    playSound(questionstuff.soundNoise);
    setTimeout(function(){
        artyom.newPrompt ({
        question: questionstuff.soundQuestion,
        options: questionstuff.soundOptions,
        onMatch: (i) => {
        var action;
        if (i == 0){
            action = () => {
                artyom.say("Correct");
                score = score + 1;
                counter = counter + 1;
                if (animals == true){
                    animalsQuiz(counter, score);
                }
                if (instruments == true){
                   instrumentsQuiz(counter, score); 
                }
                // out of bounds error probably, check later??  
            }   
        }
        if (i == 2){
            action = () => {
                artyom.say("Incorrect");
            }
            setTimeout(askSoundQuestion.bind(null, questionstuff), 3000); 
            
            
            
        }
        return action;
        }
        })}, 3000);
    
}
// Question Object (For simple non-sounding questions)
function Question(myQuestion, myOptions){
    this.question = myQuestion;
    this.options = myOptions;
}
// Question
function askQuestion(simple){
    // It asks a question, istens to answer for options, and then replies with correct or incorrect.
    // Parameter is an object
    setTimeout(function(){
        artyom.newPrompt ({
        question: simple.question,
        options: simple.options,
        onMatch: (i) => {
        var action;
        if (i == 0){
            action = () => {
                artyom.say("Alright let's begin");
                animals = true;
                animalsQuiz(counter);
            }
        }
        if (i == 1){
            action = () => {
               artyom.say("Alright let's begin");
               //artyom.fatality();
                instruments = true;
                instrumentsQuiz(counter);
                
            } 
        }

        return action;
        }
        })}, 3000);
    
}

function playSound(soundish){
    // Plays Howler sound
    soundish.play();
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

function startContinuousArtyom(){
    // starts Artyom and listens forever (assuming you have https connection).
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