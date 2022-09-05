let test_phrases = ["Here we are again at an age when Europe is awash in the imagination. " +
    "It is no secret that such an age can become very sophistical, " +
    "that such a plan actually cannot be realized, because one has " +
    "heard too much about it and too little about the meaning of such a plan.",

    "Here is another phrase that is shorter and much less philosophical in nature.",

    "Ok last one, this one really doesn't mean anything at all.",

    "Here we are again at an age when Europe is awash in the imagination. " +
    "It is no secret that such an age can become very sophistical, " +
    "that such a plan actually cannot be realized, because one has " +
    "heard too much about it and too little about the meaning of such a plan."];



phrase_circle = new PhraseCircle("payload-column", test_phrases[0]);

function newPhrase(){
    phrase_circle.new_phrase();
}
