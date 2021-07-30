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
    document.getElementById('output-text').innerHTML = y;
    theCodeText = y;
}

// personal replace function
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}