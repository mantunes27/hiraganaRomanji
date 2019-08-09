function hiraganaTranslator(){

    //takes text box input string
    var rawInput = document.getElementById("word").value;
    var wordInput = rawInput.replace(/ /g,'');
    console.log(wordInput)

    var hiraganaAlphabet = ["あ","い","う","え" ,"お","ば","び","ぶ","べ","ぼ","だ","ぢ","づ","で","ど","が","ぎ","ぐ","げ","ご","は","ひ","ふ","へ","ほ","か","き","く","け","こ","ま","み","む","め","も","ん","ぱ","ぴ","ぷ","ぺ","ぽ","ら","り","る","れ","ろ","さ","し","す","せ","そ","た","ち","つ","て","と","や","ゆ","よ","わ","ゐ","ゑ","を","ざ","じ","ず","ぜ","ぞ"];
    var latinAlphabet = ["a","i","u","e","o","ba","bi","bu","be","bo","da","di","du","de","do","ga","gi","gu","ge","go","ha","hi","fu","he","ho","ka","ki","ku","ke","ko","ma","mi","mu","me","mo","n","pa","pi","pu","pe","po","ra","ri","ru","re","ro","sa","si","su","se","so","ta","ti","tu","te","to","ya","yu","yo","wa","wi","we","wo","za","zi","zu","ze","zo"];
    
    for(i = 0; i < wordInput.length; i++){
        if(!isInArray(wordInput[i], hiraganaAlphabet)){
            document.getElementById("demo").innerHTML = "Character " + wordInput[i] + "is not valid";
            return false;
        }
    }
    var wordOutput = "";
    //dummy data for now
    //var wordInput = "あっか";
    
    for(i = 0; i < wordInput.length; i++)
        {
        if(wordInput[i] == "っ" || wordInput[i] == "つ"){
            wordOutput += sokuonProcessing(wordInput,i);
        }
        else
        {
             wordOutput += translate(wordInput[i]);
        }
    }
    
    //outputs the translation via html
    document.getElementById("demo").innerHTML = wordOutput;

    function translate(char){
        var index = hiraganaAlphabet.indexOf(char);
        return latinAlphabet[index];
    }
    
    function sokuonProcessing(char,i){
        //gets the index of the character to be translated
        //Converts the string to an array, so the consonant is duplicated
        var hiraganaIndex = hiraganaAlphabet.indexOf(char[i+1]);
        
        var latinIndex = latinAlphabet[hiraganaIndex];
        var temp = latinIndex.split("");
        var output = temp[0];
        return output;
    }

    function isInArray(value, array) {
        return array.indexOf(value) > -1;
      }
}
