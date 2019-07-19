var hiraganaVowels = ["あ","い","う","え" ,"お"];
var latinVowels = ["a","i","u","e","o"];
var hiraganaConsonants = ["ば","び","ぶ","べ","ぼ"];
var latinConsonants = ["ba","bi","bu","be","bo"];

var wordOutput = "";
//dummy data for now
var wordInput = "っあああ";

//Create array for english and another array for hiragana
//Create sokuon method (double consonent) っ
//d,g,h,k,m,n,p,r,s,t,y,w,z

for(i = 0; i < wordInput.length; i++)
    {
    if(wordInput[i] == "っ" || wordInput[i] == "つ"){
        sokuonProcessing(wordInput,i);
    }
    else
    {
         wordOutput += translate(wordInput,i);
    }
    
  
}



function translate(wordInput){
    
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