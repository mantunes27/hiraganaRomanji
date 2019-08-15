function translate(){
    var radioButtons = document.getElementsByName("group1");
    
        if(radioButtons[0].checked == true){
            hiraganaTranslator();
        }
        else if(radioButtons[1].checked == true){
            katakanaTranslator();
        }
        
    }


function hiraganaTranslator(){

    //takes text box input string
    var rawInput = document.getElementById("word").value;
    var wordInput = rawInput.replace(/ /g,'');
    console.log(wordInput)

    var hiraganaAlphabet = ["あ","い","う","え" ,"お","ば","び","ぶ","べ","ぼ","だ","ぢ","づ","で","ど","が","ぎ","ぐ","げ","ご","は","ひ","ふ","へ","ほ","か","き","く","け","こ","ま","み","む","め","も","ん","な","に","ぬ","ね","の","ぱ","ぴ","ぷ","ぺ","ぽ","ら","り","る","れ","ろ","さ","し","す","せ","そ","た","ち","つ","て","と","や","ゆ","よ","わ","ゐ","ゑ","を","ざ","じ","ず","ぜ","ぞ"];
    var latinAlphabet = ["a","i","u","e","o","ba","bi","bu","be","bo","da","di","du","de","do","ga","gi","gu","ge","go","ha","hi","fu","he","ho","ka","ki","ku","ke","ko","ma","mi","mu","me","mo","n","na","ni","nu","ne","no","pa","pi","pu","pe","po","ra","ri","ru","re","ro","sa","si","su","se","so","ta","ti","tu","te","to","ya","yu","yo","wa","wi","we","wo","za","zi","zu","ze","zo"];
    
    for(i = 0; i < wordInput.length; i++){
        if(!isInArray(wordInput[i], hiraganaAlphabet)){
            document.getElementById("demo").innerHTML = "Character " + wordInput[i] + " is not valid";
            return false;
        }
    }
    var wordOutput = "";
    //dummy data for now
    //var wordInput = "あつか";
    
    for(i = 0; i < wordInput.length; i++)
        {
        if(wordInput[i] == "っ" || wordInput[i] == "つ"){
            wordOutput += sokuonProcessing(wordInput,i);
        }
        else
        {
             wordOutput += translateHiragana(wordInput[i]);
        }
    }
    
    //outputs the translation via html
    document.getElementById("demo").innerHTML = wordOutput;

    function translateHiragana(char){
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
}

function katakanaTranslator(){
    //takes text box input string
    var rawInput = document.getElementById("word").value;
    var wordInput = rawInput.replace(/ /g,'');
    console.log(wordInput)

    var katakanaAlphabet = ["ア","イ","ウ","エ", "オ","バ","ビ","ブ","ベ","ボ", "ダ","ヂ","ヅ","デ","ド",  "ガ","ギ","グ","ゲ","ゴ",  "ハ","ヒ","フ","ヘ","ホ", "カ","キ","ク","ケ","コ",  "マ","ミ","ム","メ","モ", "ン", "ナ","ニ","ヌ","ネ","ノ","モ","パ","ピ","プ","ペ","ポ","ラ","リ","ル","レ","ロ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ヤ","ユ","ヨ","ワ","ヰ","ヱ","ヲ","ザ","ジ","ズ","ゼ","ゾ"];
    var latinAlphabet =    ["a","i","u","e","o", "ba","bi","bu","be","bo",    "da","di","du","de","do", "ga","gi","gu","ge","go", "ha","hi","fu","he","ho", "ka","ki","ku","ke","ko", "ma","mi","mu","me","mo","n", "na","ni","nu","ne","no","pa","pi","pu","pe","po","ra","ri","ru","re","ro","sa","si","su","se","so","ta","ti","tu","te","to","ya","yu","yo","wa","wi","we","wo","za","zi","zu","ze","zo"];
    
    for(i = 0; i < wordInput.length; i++){
        if(!isInArray(wordInput[i], katakanaAlphabet)){
            document.getElementById("demo").innerHTML = "Character " + wordInput[i] + " is not valid";
            return false;
        }
    }
    var wordOutput = "";
    //dummy data for now
    //var wordInput = "アイウエ オ";
    
    for(i = 0; i < wordInput.length; i++)
        {
        if(wordInput[i] == "ッ" || wordInput[i] == "ツ"){
            wordOutput += sokuonKatakanaProcessing(wordInput,i);
        }
        else
        {
             wordOutput += translateKatakana(wordInput[i]);
        }
    }
    
    function sokuonKatakanaProcessing(char,i){
        //gets the index of the character to be translated
        //Converts the string to an array, so the consonant is duplicated
        var katakanaIndex = katakanaAlphabet.indexOf(char[i+1]);
        
        var latinIndex = latinAlphabet[katakanaIndex];
        var temp = latinIndex.split("");
        var output = temp[0];
        return output;
    }

    //outputs the translation via html
    document.getElementById("demo").innerHTML = wordOutput;

    function translateKatakana(char){
        var index = katakanaAlphabet.indexOf(char);
        return latinAlphabet[index];
    }
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}