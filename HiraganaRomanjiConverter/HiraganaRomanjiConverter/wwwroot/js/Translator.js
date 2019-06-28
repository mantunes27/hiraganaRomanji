// make just array for hiragana, english and katakana

var hiraganaDict = {
    "あ" : "a",
    "い" : "i",
    "う" : "u",
    "え" : "e",
    "お" : "o",
    "か" : "ka",
    "き" : "ki",
    "く" : "ku",
    "け" : "ke", 
    "こ" : "ko",
    "が" : "ga" ,	
    "ぎ" : "gi" ,
    "ぐ" : "gu" ,
    "げ" : "ge" ,
    "ご": "go",
    "さ": "sa",
    "し": "si",
    "す": "su",
    "せ": "se",
    "そ": "so",
    "ざ": "za", 	
    "じ": "zi", 	
    "ず": "zu", 	
    "ぜ": "ze", 	
    "ぞ": "zo",
    "た": "ta",
    "ち": "ti",
    "つ": "tu",
    "て": "te",
    "と": "to",
    "だ": "da", 	
    "ぢ": "di",
    "づ": "du",
    "で": "de",
    "ど": "do",
    "な": "na",
    "に": "ni", 	
    "ぬ": "nu", 	
    "ね": "ne", 	
    "の": "no",
    "は": "ha",
    "ひ": "hi", 	
    "ふ": "hu", 
    "へ": "he", 	
    "ほ": "ho",
    "ば": "ba", 	
    "び": "bi", 	
    "ぶ": "bu", 	
    "べ": "be", 	
    "ぼ": "bo",
    "ぱ": "pa", 
    "ぴ": "pi",
    "ぷ": "pu",
    "ぺ": "pe",
    "ぽ": "po",
    "ま": "ma", 	
    "み": "mi", 	
    "む": "mu", 	
    "め": "me", 	
    "も": "mo",
    "や": "ya",
    "ゆ": "yu",
    "よ": "yo",
    "ら": "ra", 	
    "り": "ri", 	
    "る": "ru", 	
    "れ": "re", 	
    "ろ": "ro",
    "わ": "wa",
    "ゐ": "wi",
    "ゑ": "we", 	
    "を": "wo",
    "ん": "n",
};

function hiraganaToRomanji(word) {
    var splitWord = word.split(" ");
    var result = " ";
    var dictSize = Object.keys(hiraganaDict).length;
    
    var index = hiraganaDict.findIndex(function())



   for(i = 0; i < splitWord.length; i++){
       console.log(splitWord[i]);
    for(j = 0; j <dictSize; j++){
        console.log("inside second loop");
        console.log(hiraganaDict);
        if(splitWord[i] == hiraganaDict[j]){
            console.log("INSIDE THE COMPARISON")
            result += hiraganaDict[j].value;
        }
    }
   }
    return result;
}

console.log(hiraganaToRomanji("あ"));



