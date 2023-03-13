//let test_phrases = ["Here we are again at an age when Europe is awash in the imagination. " +
//    "It is no secret that such an age can become very sophistical, " +
//    "that such a plan actually cannot be realized, because one has " +
//    "heard too much about it and too little about the meaning of such a plan.",
//
//    "Here is another phrase that is shorter and much less philosophical in nature.",
//
//    "Ok last one, this one really doesn't mean anything at all.",
//
//    "Here we are again at an age when Europe is awash in the imagination. " +
//    "It is no secret that such an age can become very sophistical, " +
//    "that such a plan actually cannot be realized, because one has " +
//    "heard too much about it and too little about the meaning of such a plan."];

let welcome_phrase = "Welcome to False Prophets. Enter a seed phrase or just click to get started"


let url = "http://127.0.0.1:5000/generate-start"
var phrase;
var phrase_circle = new PhraseCircle("payload-column", welcome_phrase)
//
//fetch(url).then(function(response) {
//    console.log(response);
//    return response.json();
//    })
//.then(function(data) {
//  console.log(data);
//});


function newPhrase(){
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        phrase_circle.new_phrase(data);
});
}
