function convertASCIIToDecimal(text, base = 10) {
    if (text !== undefined && text.length > 0) {
        var dec = text.charCodeAt(0).toString(base);
        for(var i = 1; i < text.length; i++) {
            dec += ' ' + text.charCodeAt(i).toString(base);
        }
        return dec;
    }
    return text;
}

function convertDecimalToASCII(text, base = 10) {
    var numbers = text.split(' ');
    numbers = numbers.map(function(number) { return parseInt(number, base) });
    return String.fromCharCode.apply(null, numbers);
}

function convertASCIIToBase64(text) {
    return btoa(text);
}

function convertBase64ToASCII(text) {
    return atob(text);
}

function convertASCIIToURL(text) {
    return encodeURI(text);
}

function convertURLToASCII(text) {
    return decodeURI(text);
}

function rot13(text) {
    return text.replace(/[A-Za-z]/g, function(c) {
        return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26)
    });
}

function convertFromASCII(text) {
    if (text === undefined) {
        text = document.getElementById('ascii').value;
    } else {
        document.getElementById('ascii').value = text;
    }
    document.getElementById('hex').value = convertASCIIToDecimal(text, 16);
    document.getElementById('bin').value = convertASCIIToDecimal(text, 2);
    document.getElementById('decimal').value = convertASCIIToDecimal(text);
    document.getElementById('base64').value = convertASCIIToBase64(text);
    document.getElementById('url').value = convertASCIIToURL(text);
    document.getElementById('rot13').value = rot13(text);
}

function convertFromHex() {
    var text = document.getElementById('hex').value;
    convertFromASCII(convertDecimalToASCII(text, 16));
}

function convertFromBin() {
    var text = document.getElementById('bin').value;
    convertFromASCII(convertDecimalToASCII(text, 2));
}

function convertFromDecimal() {
    var text = document.getElementById('decimal').value;
    convertFromASCII(convertDecimalToASCII(text));
}

function convertFromBase64() {
    var text = document.getElementById('base64').value;
    convertFromASCII(convertBase64ToASCII(text));
}

function convertFromURL() {
    var text = document.getElementById('url').value;
    convertFromASCII(convertURLToASCII(text));
}

function convertFromROT13() {
    var text = document.getElementById('rot13').value;
    convertFromASCII(rot13(text));
}
