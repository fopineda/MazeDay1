//------------------------------------------------ Variables -----------------------------------------------------
var tester  = new Howl({
    src: ['Lil Uzi Vert - Seven Million ft. Future.mp3']
})


// ANIMALS
var panther1  = new Howl({
    src: ['animals/panther4.mp3']
})

var dolphin1  = new Howl({
    src: ['animals/dolphin1.mp3']
})

var dogbark1  = new Howl({
    src: ['animals/dogbark2.mp3']
})

var pig1  = new Howl({
    src: ['animals/pig1.mp3']
})

var elephant1  = new Howl({
    src: ['animals/elephant1.mp3']
})


// INSTRUMENTS
var drums1  = new Howl({
    src: ['instruments/drums1.mp3']
})

var harp1  = new Howl({
    src: ['instruments/Harp1.wav']
})

var gong1  = new Howl({
    src: ['instruments/gong1.wav']
})


// CARS
var amb1  = new Howl({
    src: ['cars/amb1.mp3']
})
var alarm1  = new Howl({
    src: ['cars/alarm1.mp3']
})
var horn1  = new Howl({
    src: ['cars/horn1.mp3']
})

// People
var sneeze1  = new Howl({
    src: ['humans/sneeze1.mp3']
})
var burp1  = new Howl({
    src: ['humans/burp1.mp3']
})
var slupr1  = new Howl({
    src: ['humans/slurp1.mp3']
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
var cars = false;
var people = false;
var score = 0;
var first = true;

MainMenu();

//$( "#something" ).click(function() {
//    MainMenu();
    //artyom.fatality(); 
//});


//askSoundQuestion(pantherQuestion);
//artyom.simulateInstruction("panther");
//------------------------------------------------ functions -----------------------------------------------------
// To begin
function MainMenu(){
    counter = 0;
    animals = false;
    instruments = false;
    cars = false;
    people = false;
    score = 0;

    
    artyom.say("We have Animals, Instruments, Cars, and People sounds"); 

    var beginingQuestion = new Question("Which would you like to hear?", ["Animals", "Instruments", "Cars", "People", "Play some Trap", "trap"]);
    //askQuestion(beginingQuestion);
    console.log("inside mmm");

    setTimeout(askQuestion.bind(null, beginingQuestion), 4000); 
}

// ANIMALS
function animalsQuiz(index,score){
    var pantherQuestion = new SoundQuestion("What is this animal?", ["Panther", "Black Panther", "I don't know"], panther1);
    var dolphinQuestion = new SoundQuestion("What is this animal?", ["Dolphin", "A Dolphin", "I don't know"], dolphin1);
    var dogQuestion = new SoundQuestion("What is this animal?", ["Dog", "A Dog","I don't know"], dogbark1);
    var elephantQuestion = new SoundQuestion("What is this animal?", ["Elephant", "An Elephant","I don't know"], elephant1);
    var pigQuestion = new SoundQuestion("What is this animal?", ["Pig", "A Pig","I don't know"], pig1);
    
    
    var questionsList = [
        pantherQuestion,
        dolphinQuestion,
        dogQuestion,
        elephantQuestion,
        pigQuestion
    ]
    
   var totalQuestions = questionsList.length;
   if (index == totalQuestions){ // reaches the end of the quiz so go back to main menu
       artyom.say("You got "+score+ "out of "+totalQuestions+ "correct");
       //artyom.say("We have Animals, Instruments, Cars, and People sounds");
        //setTimeout(MainMenu(), 3000);  // delay for about 3 seconds
       window.location.reload();
       //setTimeout(window.location.reload(), 3000);
    }
    else{
      setTimeout(askSoundQuestion.bind(null, questionsList[index]), 3000);  
    }
}

// INSTRUMENTS
function instrumentsQuiz(index,score){
    var drumsQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["Drums", "Drum", "I don't know"], drums1);
    var harpsQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["Harp", "Harps", "I don't know"], harp1);
    var gongsQuestion = new SoundQuestion("What's the instrument that plays this sound?", ["Gone", "A gone", "I don't know"], gong1);
    var questionsList = [
        drumsQuestion,
        harpsQuestion,
        gongsQuestion,
    ]
    
    var totalQuestions = questionsList.length;
    if (index == totalQuestions){  // reaches the end of the quiz so go back to main menu
        artyom.say("You got "+score+ "out of "+totalQuestions+ "correct");
        //setTimeout(MainMenu(), 3000);  // delay for about 3 seconds
        window.location.reload();
        //setTimeout(window.location.reload(), 3000);
        
    }
    else{
      setTimeout(askSoundQuestion.bind(null, questionsList[index]), 3000);  
    }
    
     
}

// CARS
function carsQuiz(index,score){
    var ambQuestion = new SoundQuestion("What is this sound?", ["ambulance", "police", "I don't know"], amb1);
    var alarmQuestion = new SoundQuestion("What is this sound?", ["police", "ambulance", "I don't know"], alarm1);
    var hornQuestion = new SoundQuestion("What is this sound?", ["horn", "car horn", "I don't know"], horn1);
    var questionsList = [
        ambQuestion,
        alarmQuestion,
        hornQuestion,
    ]
    
    var totalQuestions = questionsList.length;
    if (index == totalQuestions){  // reaches the end of the quiz so go back to main menu
        artyom.say("You got "+score+ "out of "+totalQuestions+ "correct");
        //setTimeout(MainMenu(), 3000);  // delay for about 3 seconds
        //setTimeout(window.location.reload(), 3000);
        window.location.reload();
        
    }
    else{
      setTimeout(askSoundQuestion.bind(null, questionsList[index]), 3000);  
    }
    
     
}

// People
function peopleQuiz(index,score){
    var sneezeQuestion = new SoundQuestion("What is this sound?", ["sneeze", "a sneeze", "I don't know"], sneeze1);
    var burpQuestion = new SoundQuestion("What is this sound?", ["burp", "a burp", "I don't know"], burp1);
    var slurpQuestion = new SoundQuestion("What is this sound?", ["slurp", "a slurp", "I don't know"], slupr1);
    var questionsList = [
        sneezeQuestion,
        burpQuestion,
        slurpQuestion,
    ]
    
    var totalQuestions = questionsList.length;
    if (index == totalQuestions){ 
       artyom.say("You got "+score+ "out of "+totalQuestions+ "correct");
        //setTimeout(MainMenu(), 3000);  // delay for about 3 seconds
        window.location.reload();
        //setTimeout(window.location.reload(), 3000);
        
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
        if (i == 0 || i == 1){
            action = () => {
                artyom.say("Correct");
                score = score + 1;
                counter = counter + 1;
                if (animals == true){
                    animalsQuiz(counter,score);
                }
                if (instruments == true){
                   instrumentsQuiz(counter,score); 
                }
                if (cars == true){
                   carsQuiz(counter,score); 
                }
                if (people == true){
                   peopleQuiz(counter,score); 
                }
            }   
        }
            
        if (i == 2){
            action = () => {
                artyom.say("Incorrect, the correct answer is" + questionstuff.soundOptions[0]);
                counter = counter + 1;
                if (animals == true){
                    animalsQuiz(counter,score);
                }
                if (instruments == true){
                   instrumentsQuiz(counter,score); 
                }
                if (cars == true){
                   carsQuiz(counter,score); 
                }
                if (people == true){
                   peopleQuiz(counter,score); 
                }
            }
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
                animalsQuiz(counter,score);
            }
        }
        if (i == 1){
            action = () => {
               artyom.say("Alright let's begin");
                instruments = true;
                instrumentsQuiz(counter, score);  
            } 
        }
        if (i == 2){
            action = () => {
               artyom.say("Alright let's begin");
                cars = true;
                carsQuiz(counter, score);  
            } 
        }
        if (i == 3){
            action = () => {
               artyom.say("Alright let's begin");
                people = true;
                peopleQuiz(counter, score);  
            } 
        }
        if (i == 4 || i == 5){
            action = () => {
               tester.play(); 
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