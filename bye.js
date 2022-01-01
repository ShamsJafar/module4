(function (window){
    var byeSpeaker = {};
    var speakWord = "Good Bye Coursera";
    
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
     
     window.byeSpeaker = byeSpeaker;
    })(window);
