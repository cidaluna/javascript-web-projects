const countWords = () => {
    let countC = document.getElementById('inputText').value.length;
    if(countC == 0){
        reset();
    }
    let countW = document.getElementById('inputText').value;
    let removeSpaces = countW.replace(/ /g, "");
    removeSpaces = removeSpaces.length;

    countW = countW.match( /\w+/g );
    countW = countW.length;

    document.getElementById('showTotalCharacteres').innerHTML = ` = ${countC}`;
    document.getElementById('showTotalCharacteresWithoutSpaces').innerHTML = ` = ${removeSpaces}`;
    document.getElementById('showTotalWords').innerHTML = ` = ${countW}`;
}

function reset(){
    document.getElementById('inputText').value = '';
    document.getElementById('showTotalCharacteres').innerHTML = ' = 0';
    document.getElementById('showTotalCharacteresWithoutSpaces').innerHTML = ' = 0';
    document.getElementById('showTotalWords').innerHTML = ' = 0';
};