var hiraganaAlphabet = ["あ","い","う","え" ,"お","ば","び","ぶ","べ","ぼ","だ","ぢ","づ","で","ど","が","ぎ","ぐ","げ","ご","は","ひ","ふ","へ","ほ","か","き","く","け","こ","ま","み","む","め","も","ん","ぱ","ぴ","ぷ","ぺ","ぽ","ら","り","る","れ","ろ","さ","し","す","せ","そ","た","ち","つ","て","と","や","ゆ","よ","わ","ゐ","ゑ","を","ざ","じ","ず","ぜ","ぞ"];
var latinAlphabet = ["a","i","u","e","o","ba","bi","bu","be","bo","da","di","du","de","do","ga","gi","gu","ge","go","ha","hi","fu","he","ho","ka","ki","ku","ke","ko","ma","mi","mu","me","mo","n","pa","pi","pu","pe","po","ra","ri","ru","re","ro","sa","si","su","se","so","ta","ti","tu","te","to","ya","yu","yo","wa","wi","we","wo","za","zi","zu","ze","zo"];

var wordOutput = "";
//dummy data for now
var wordInput = "あか";

//Create sokuon method (double consonent) っ

for(i = 0; i < wordInput.length; i++)
    {
    if(wordInput[i] == "っ" || wordInput[i] == "つ"){
        sokuonProcessing(wordInput,i);
    }
    else
    {
         wordOutput += translate(wordInput[i]);
    }
}

console.log(wordOutput);



function translate(char){
    var index = hiraganaAlphabet.indexOf(char);
    return latinAlphabet[index];
}

function sokuonProcessing(wordInput,i){
    //identifies sokuon
    //gets char from array position plus 1
    //return it

    //replace wordInput variable with latin alphabet array
    var output = wordInput[i+1];
    console.log(output);
    return output;
}