let theCodeText = '';
function saveAndExit() {
    localStorage.setItem("SbScanAndPayCardNumber", theCodeText);
    window.history.back();
}
// old variable: SBcardNumber | new variable: SbScanAndPayCardNumber
// max 32 chars
function myInput(){
    let str = document.getElementById('input-box').value;
    let y = str.replace(/\s/g,'');
    theCodeText = y;
    document.getElementById('output-text').innerHTML = spaceOut(y);
}

function spaceOut(s) {
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (i%4 == 0) {
            temp = temp + ' ';
        }
        temp = temp + s[i];
    }
    return temp
}