
function toInfo() {
    document.location.href = "../helpPage/help.html";
}
let cardNumber = '';

function addBarCode() {
    try {
        // The return value is the canvas element
        let canvas = bwipjs.toCanvas('code', {
                bcid:        'pdf417',       // Barcode type
                text:        cardNumber,    // Text to encode
                scale:       3,               // 3x scaling factor
                height:      200,              // Bar height, in millimeters
                width:       600,
                columns: 3,
                includetext: true,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
        // turns everything else off
        let cardHolder = document.getElementById("qrcode-holder");
        cardHolder.style.backgroundColor = "white";
        myRemove(document.getElementById("no-code"));
        myRemove(document.getElementById("help-button"));
    } catch (e) {
        console.log(e);
    }
}

function myRemove(elem) {
    elem.parentNode.removeChild(elem);
}

// this needs to happen before the function call below
if (!localStorage.getItem("SbScanAndPayCardNumber")) {
    localStorage.setItem("SbScanAndPayCardNumber", "");
} else {
    cardNumber = localStorage.getItem('SbScanAndPayCardNumber');
    // if it isnt empty
    if (cardNumber !== '') {
        addBarCode();
    }
}