var words = "I am pleased to meet you";
function sentence(string) {
        var arrOfWords = string.split(" ");
        var numWords = arrOfWords.length;
        var total = "";
        for (var i = 0; i < numWords; i++) {
            total = total + arrOfWords[i];}
        var wordLength = total.length / numWords;
        return "This sentence has " + arrOfWords.length + " words. The average length of each word is " + wordLength + ".";
}
sentence(words);