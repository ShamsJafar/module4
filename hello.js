(function (window){  
    var helloSpeaker = {};
    var speakWord = "Hello Coursera";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);